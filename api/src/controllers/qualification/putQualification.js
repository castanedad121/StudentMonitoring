const { Qualification, Student, Course, User } = require("../../DB_connection");
const putQualification = async (id, data) => {
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
  } = data.body && data.body;

  const notas = [];
  noteParticipacion && notas.push(noteParticipacion);
  noteTrabajos && notas.push(noteTrabajos);
  noteAsistencias && notas.push(noteAsistencias);
  noteCarpeta && notas.push(noteCarpeta);
  const sum = notas.length ? notas.reduce((a, b) => a + b) : null;
  const promedio = sum ? (sum / notas.length).toFixed(1) : null;
  if (id && unit && user && student && course) {
    const existingQualification = await Qualification.findByPk(id, {
      include: [
        { model: Student },
        { model: Course },
        { model: User, attributes: ["id", "name", "lastName", "email"] },
      ],
    });
    if (!existingQualification) {
      return { update: false, message: "Qualification no exists" };
    }

    existingQualification.feedbackParticipacion = feedbackParticipacion || null;
    existingQualification.feedbackTrabajos = feedbackTrabajos || null;
    existingQualification.feedbackAsistencias = feedbackAsistencias || null;
    existingQualification.feedbackCarpeta = feedbackCarpeta || null;
    existingQualification.noteParticipacion = noteParticipacion || null;
    existingQualification.noteTrabajos = noteTrabajos || null;
    existingQualification.noteAsistencias = noteAsistencias || null;
    existingQualification.noteCarpeta = noteCarpeta || null;
    existingQualification.promedio = promedio || null;
    existingQualification.unit = unit;
    existingQualification.save();

    (await User.findByPk(user)) && (await existingQualification.setUser(user));
    (await Student.findByPk(student)) &&
      (await existingQualification.setStudent(student));
    (await Course.findByPk(course)) &&
      (await existingQualification.setCourse(course));

    const updateQualification = await Qualification.findByPk(id, {
      include: [
        { model: Student },
        { model: Course },
        { model: User, attributes: ["id", "name", "lastName", "email"] },
      ],
    });
    return { update: true, updateQualification };
  } else {
    return { update: false, message: "Missing data for update qualification" };
  }
};

module.exports = putQualification;
