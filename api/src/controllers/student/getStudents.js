const { Op } = require("sequelize");
const { Student, User, Course } = require("../../DB_connection");
const getStudents = async (data) => {
  const {
    textsearch = "",
    attribute = "createdAt",
    attribute2 = "name",
    order = "asc",
    page = 0,
    size = 8,
    createDateEnd = "",
    createDateStart = "",
    user = "",
    course = "",
    division = "",
    period = "",
    year = "",
  } = data;
  const requiredUser = user ? true : false;
  const requiredCourse = course ? true : false;
  const existingStudents = await Student.findAndCountAll({
    include: [
      {
        model: User,
        where: user && {
          [Op.or]: [
            {
              identDocument: {
                [Op.iLike]: `%${user}%`,
              },
            },
            {
              name: {
                [Op.iLike]: `%${user}%`,
              },
            },
            {
              lastName: {
                [Op.iLike]: `%${user}%`,
              },
            },
          ],
        },
        required: requiredUser,
      },
      {
        model: Course,
        where: course
          ? {
              [Op.and]: [
                {
                  [Op.or]: [
                    course && {
                      serialNumber: {
                        [Op.iLike]: `%${course}%`,
                      },
                    },
                    course && {
                      nameCourse: {
                        [Op.iLike]: `%${course}%`,
                      },
                    },
                  ],
                },
                division && { division: { [Op.iLike]: division } },
                period && { period: { [Op.iLike]: period } },
                year && { year: { [Op.iLike]: year } },
              ],
            }
          : {
              [Op.and]: [
                division && { division: { [Op.iLike]: division } },
                period && { period: { [Op.iLike]: period } },
                year && { year: { [Op.iLike]: year } },
              ],
            },
        required: requiredCourse,
      },
    ],
    distinct: true,
    where: {
      [Op.or]: [
        //filtro por text
        { name: { [Op.iLike]: `%${textsearch}%` } },
        { lastName: { [Op.iLike]: `%${textsearch}%` } },
        { identDocument: { [Op.iLike]: `%${textsearch}%` } },
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

  return { geted: true, existingStudents };
};

module.exports = getStudents;
