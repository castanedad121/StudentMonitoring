const { Qualification, Student, Course, User } = require("../../DB_connection");
const postQualification = async (data) => {
  const {
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
  } = data;
  const notas = [];
  noteParticipacion && notas.push(noteParticipacion);
  noteTrabajos && notas.push(noteTrabajos);
  noteAsistencias && notas.push(noteAsistencias);
  noteCarpeta && notas.push(noteCarpeta);
  const sum = notas.reduce((a, b) => a + b);
  const promedio = (sum / notas.length).toFixed(1);

  if (unit && user && student && course) {
    const qualificationNew = await Qualification.create({
      feedbackParticipacion: feedbackParticipacion || null,
      feedbackTrabajos: feedbackTrabajos || null,
      feedbackAsistencias: feedbackAsistencias || null,
      feedbackCarpeta: feedbackCarpeta || null,
      noteParticipacion: noteParticipacion || null,
      noteTrabajos: noteTrabajos || null,
      noteAsistencias: noteAsistencias || null,
      noteCarpeta: noteCarpeta || null,
      promedio,
      unit,
      user,
      student,
      course,
    });
    (await User.findByPk(user)) && (await qualificationNew.setUser(user));
    (await Student.findByPk(student)) &&
      (await qualificationNew.setStudent(student));
    (await Course.findByPk(course)) &&
      (await qualificationNew.setCourse(course));
    return { created: true, qualificationNew };
  } else {
    return {
      created: false,
      message: "Missing data for creating qualification",
    };
  }
};

module.exports = postQualification;
