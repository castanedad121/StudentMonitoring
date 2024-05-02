const { Op } = require("sequelize");
const { Student, User, Course } = require("../../DB_connection");
const getCourses = async (data) => {
  const {
    textsearch = "",
    attribute = "createdAt",
    attribute2 = "nameCourse",
    order = "asc",
    page = 0,
    size = 8,
    createDateEnd = "",
    createDateStart = "",
    state = "",
    user = "",
    student = "",
    division = "",
    period = "",
    year = "",
  } = data;
  const requiredUser = user ? true : false;
  const requiredStudent = student ? true : false;
  const existingCourses = await Course.findAndCountAll({
    include: [
      {
        model: User,
        where: user && {
          [Op.or]: [
            {
              identDocument: {
                [Op.iLike]: `${user}%`,
              },
            },
            {
              name: {
                [Op.iLike]: `${user}%`,
              },
            },
            {
              lastName: {
                [Op.iLike]: `${user}%`,
              },
            },
          ],
        },
        required: requiredUser,
      },
      {
        model: Student,
        where: student && {
          [Op.or]: [
            {
              identDocument: {
                [Op.iLike]: `${student}%`,
              },
            },
            {
              name: {
                [Op.iLike]: `${student}%`,
              },
            },
            {
              lastName: {
                [Op.iLike]: `${student}%`,
              },
            },
          ],
        },
        required: requiredStudent,
      },
    ],
    distinct: true,
    where: {
      [Op.and]: [
        {
          [Op.or]: [
            //filtro por text
            { nameCourse: { [Op.iLike]: `%${textsearch}%` } },
            { serialNumber: { [Op.iLike]: `%${textsearch}%` } },
          ],
        },
        state && { state: { [Op.eq]: state } },
        division && { division: { [Op.iLike]: division } },
        period && { period: { [Op.iLike]: period } },
        year && { year: { [Op.iLike]: year } },
      ],
      createdAt: {
        //para la fecha de creación
        [Op.gte]: createDateStart || "1900-01-01",
        [Op.lte]: createDateEnd || "9999-12-31",
      },
    },
    order: [
      [attribute, order],
      [attribute2, order],
    ],
    limit: size,
    offset: size * page,
  });

  return { geted: true, existingCourses };
};

module.exports = getCourses;
