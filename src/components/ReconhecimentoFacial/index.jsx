import { useRef, useEffect } from "react";
import { ReconhecimentoFacialContainer } from "./style.js";
import * as faceapi from "face-api.js";

export default function ReconhecimentoFacial() {
  const videoRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    startVideo();

    videoRef && loadModels();
  }, []);

  const loadPeoples = () => {
    const labels = [];
    labels.push("Bruno");
    return Promise.all(
      labels.map(async (label) => {
        const descriptions = [];
        for (let i = 1; i <= 5; i++) {
          const img = await faceapi.fetchImage(`../assets/images/${label}/${i}.jpg`);
          const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();
          descriptions.push(detections.descriptor);
        }
        return new faceapi.LabeledFaceDescriptors(label, descriptions);
      })
    );
  };

  const loadModels = async () => {
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("/models"),
      faceapi.nets.ageGenderNet.loadFromUri("/models"),
      faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
    ]).then(() => {
      faceDetection();
    });
  };

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((currentStream) => {
        videoRef.current.srcObject = currentStream;
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const faceDetection = async () => {
    setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions()
        .withAgeAndGender()
        .withFaceDescriptors();

      canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(videoRef.current);
      faceapi.matchDimensions(canvasRef.current, {
        width: 940,
        height: 650,
      });

      const labels = await loadModels();

      const resized = faceapi.resizeResults(detections, {
        width: 940,
        height: 650,
      });

      const faceMatcher = new faceapi.FaceMatcher(labels, 0.5);
      const results = resized.map((d) => faceMatcher.findBestMatch(d.descriptor));
      canvasRef.getContext("2d").clearRect(0, 0, canvasRef.width, canvasRef.height);
      faceapi.draw.drawDetections(canvasRef.current, resized);

      results.forEach((result, index) => {
        const box = resized[index].detection.box;
        const drawBox = new faceapi.draw.DrawBox(box, { label: result.toString() });
        drawBox.draw(canvasRef);
      });
    }, 5000);
  };

  return (
    <ReconhecimentoFacialContainer>
      <video crossOrigin="anonymous" ref={videoRef} autoPlay></video>
      {/* <canvas ref={canvasRef} className='app__canvas' /> */}
    </ReconhecimentoFacialContainer>
  );
}
