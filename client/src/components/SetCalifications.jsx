/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { GoPencil } from "react-icons/go";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { TbArrowBackUp } from "react-icons/tb";
import { useEffect, useState } from "react";
import {
  postQualification,
  putQualification,
  selectQualification,
} from "../redux/actions";
import { useNavigate } from "react-router-dom";

const SetCalifications = () => {
  const roleUser = useSelector((state) => state?.userLogin.role);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const qualificationUpdate = useSelector(
    (state) => state?.updateQualification
  );

  const qualificationCreate = useSelector(
    (state) => state?.createQualification
  );
  const unitSelect = useSelector((state) => state?.selectUnit);

  const qualification = useSelector((state) => state?.selectQualification);

  const course = useSelector((state) => state?.selectCourse.id);

  const student = useSelector((state) => state?.selectStudent.id);

  const user = useSelector((state) => state?.userLogin.id);

  const token = useSelector((state) => state?.token);
  const [disabled, setDisabled] = useState(true);

  const [qualify, setQualify] = useState({
    id: qualification?.id || "",
    feedbackParticipacion: qualification?.feedbackParticipacion || "",
    feedbackTrabajos: qualification?.feedbackTrabajos || "",
    feedbackAsistencias: qualification?.feedbackAsistencias || "",
    feedbackCarpeta: qualification?.feedbackCarpeta || "",
    noteParticipacion: qualification?.noteParticipacion || "",
    noteTrabajos: qualification?.noteTrabajos || "",
    noteAsistencias: qualification?.noteAsistencias || "",
    noteCarpeta: qualification?.noteCarpeta || "",
    promedio: qualification?.promedio || "",
    unit: unitSelect.unidad,
    user: user,
    student: student,
    course: course,
  });

  const handlerChange = (e) => {
    setQualify({
      ...qualify,
      [e.target.name]: e.target.value,
    });
  };
  const handlerChangenote = (e) => {
    console.log(e.target.value);
    setQualify({
      ...qualify,
      [e.target.name]: e.target.value !== "" ? parseInt(e.target.value) : "",
    });
  };

  const handlerSubmit = () => {
    //setDisabled(true);
    const {
      id,
      feedbackParticipacion,
      feedbackTrabajos,
      feedbackAsistencias,
      feedbackCarpeta,
      noteParticipacion,
      noteTrabajos,
      noteAsistencias,
      noteCarpeta,
      unit,
      user,
      student,
      course,
    } = qualify;
    if (id !== "") {
      dispatch(
        putQualification(
          id,
          {
            feedbackParticipacion,
            feedbackTrabajos,
            feedbackAsistencias,
            feedbackCarpeta,
            noteParticipacion,
            noteTrabajos,
            noteAsistencias,
            noteCarpeta,
            unit,
            user,
            student,
            course,
          },
          token
        )
      )
        .then(() => window.alert("Calificación registrada con éxito"))
        .then(() => location.reload());
    } else {
      console.log("entro aqui");
      dispatch(
        postQualification(
          {
            feedbackParticipacion,
            feedbackTrabajos,
            feedbackAsistencias,
            feedbackCarpeta,
            noteParticipacion,
            noteTrabajos,
            noteAsistencias,
            noteCarpeta,
            unit,
            user,
            student,
            course,
          },
          token
        )
      )
        .then(() => window.alert("Calificación registrada con éxito"))
        .then(() => location.reload());
    }
  };

  useEffect(() => {
    if (qualificationUpdate) {
      dispatch(selectQualification(qualificationUpdate));
    }
    if (qualificationCreate) {
      dispatch(selectQualification(qualificationCreate));
    }
  }, [qualificationUpdate, qualificationCreate]);

  return (
    <>
      <div className="flex justify-between w-auto mx-32 border-2 border-[#407BFF] rounded-xl overflow-hidden p-6 shadow-[inset_15px_0px_0px_-5px_rgba(64,123,255,1)] ">
        <TbArrowBackUp
          className="size-10 text-[#A4B0BE]  hover:text-[#ECCC68] hover:scale-125 hover:cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <div className="flex flex-col justify-around grow">
          <div className="flex justify-around grow">
            <div
              type="submit"
              name="IUnidad"
              value="I Unidad"
              className={`text-3xl font-bold w-36 ${unitSelect?.color} text-center m-auto hover:cursor-default rounded-md`}
            >
              {unitSelect?.unidad}
            </div>
          </div>

          <div className="flex justify-around p-6 overflow-hidden">
            <div className="w-min p-2  flex items-center justify-center">
              <div className="flex flex-col justify-center items-center py-6 border-4 border-[#A4B0BE] w-44 h-44 rounded-full overflow-hidden">
                <p className="text-7xl font-bold">{qualify.promedio}</p>
                <h1 className="text-slate-600 text-xl font-semibold">
                  Promedio
                </h1>
              </div>
            </div>
            <div className="w-2/5 p-2">
              <div className="border-2 border-[#A4B0BE] rounded-lg p-4">
                <div className="flex justify-between">
                  <p className="text-slate-600 text-xl font-semibold">
                    Participacion en clase
                  </p>
                  <input
                    disabled={disabled}
                    onChange={(e) => handlerChangenote(e)}
                    type="text"
                    name="noteParticipacion"
                    value={qualify.noteParticipacion}
                    className="w-20 text-2xl font-bold text-center bg-slate-100 border-black border-b-2 focus:ring-0"
                  />
                </div>
                <div>
                  <p className="text-base font-medium">Feedback</p>
                  <textarea
                    disabled={disabled}
                    name="feedbackParticipacion"
                    id=""
                    cols="40"
                    rows="4"
                    value={qualify.feedbackParticipacion}
                    className="bg-slate-100"
                    onChange={(e) => handlerChange(e)}
                  ></textarea>
                </div>
                <div className="flex justify-between">
                  <p className="text-slate-600 text-xl font-semibold">
                    Trabajos entregados
                  </p>
                  <input
                    disabled={disabled}
                    onChange={(e) => handlerChangenote(e)}
                    name="noteTrabajos"
                    value={qualify.noteTrabajos}
                    type="text"
                    className="w-20 text-2xl font-bold text-center bg-slate-100 border-black border-b-2 focus:ring-0"
                  />
                </div>
                <div>
                  <p className="text-base font-medium">Feedback</p>
                  <textarea
                    disabled={disabled}
                    onChange={(e) => handlerChange(e)}
                    name="feedbackTrabajos"
                    id=""
                    cols="40"
                    rows="4"
                    className="bg-slate-100"
                    value={qualify.feedbackTrabajos}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="w-2/5 p-2">
              <div className="border-2 border-[#A4B0BE] rounded-lg p-4">
                <div className="flex justify-between">
                  <p className="text-xl font-semibold">Asistencias</p>
                  <input
                    disabled={disabled}
                    onChange={(e) => handlerChangenote(e)}
                    name="noteAsistencias"
                    value={qualify.noteAsistencias}
                    type="text"
                    className="w-20 text-2xl font-bold text-center bg-slate-100 border-black border-b-2 focus:ring-0"
                  />
                </div>
                <div>
                  <p className="text-base font-medium">Feedback</p>
                  <textarea
                    disabled={disabled}
                    onChange={(e) => handlerChange(e)}
                    name="feedbackAsistencias"
                    value={qualify.feedbackAsistencias}
                    id=""
                    cols="40"
                    rows="4"
                    className="bg-slate-100"
                  ></textarea>
                </div>
                <div className="flex justify-between">
                  <p className="text-xl font-semibold">Carpeta</p>
                  <input
                    disabled={disabled}
                    onChange={(e) => handlerChangenote(e)}
                    name="noteCarpeta"
                    type="text"
                    value={qualify.noteCarpeta}
                    className="w-20 text-2xl font-bold text-center bg-slate-100 border-black border-b-2 focus:ring-0"
                  />
                </div>
                <div>
                  <p className="text-base font-medium">Feedback</p>
                  <textarea
                    disabled={disabled}
                    onChange={(e) => handlerChange(e)}
                    name="feedbackCarpeta"
                    value={qualify.feedbackCarpeta}
                    id=""
                    cols="40"
                    rows="4"
                    className="bg-slate-100"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

        {roleUser === "Docente" && (
          <div className="flex flex-col justify-between">
            <GoPencil
              className={
                disabled
                  ? "size-10 text-[#A4B0BE]  hover:text-[#ECCC68] hover:scale-125 hover:cursor-pointer"
                  : "size-10 text-[#ECCC68]  hover:text-[#ECCC68] hover:scale-125 hover:cursor-pointer"
              }
              onClick={() => setDisabled(false)}
            />
            <IoIosCheckmarkCircleOutline
              className="size-10 text-[#A4B0BE]  hover:text-[#ECCC68] hover:scale-125 hover:cursor-pointer"
              onClick={(e) => handlerSubmit(e)}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default SetCalifications;
