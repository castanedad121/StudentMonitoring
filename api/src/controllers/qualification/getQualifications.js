const { Op } = require("sequelize");
const { Qualification, Student, User, Course } = require("../../DB_connection");
const getQualifications = async (data) => {
  const {
    attribute = "unit",
    order = "asc",
    page = 0,
    size = 20,
    createDateEnd = "",
    createDateStart = "",
    user = "",
    student = "",
    course = "",
    division = "",
    period = "",
    year = "",
    unit,
  } = data;

  const existingQualifications = await Qualification.findAndCountAll({
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
      },
    ],
    distinct: true,
    where: {
      [Op.and]: [
        //filtro por text
        unit && { unit: { [Op.eq]: unit } },
      ],
      createdAt: {
        //para la fecha de creación
        [Op.gte]: createDateStart || "1900-01-01",
        [Op.lte]: createDateEnd || "9999-12-31",
      },
    },
    order: [[attribute, order]],
    limit: size,
    offset: size * page,
  });

  return { geted: true, existingQualifications };
};

module.exports = getQualifications;
