const { Op } = require("sequelize");
const { User, Student, Course } = require("../../DB_connection");
const getUsers = async (data) => {
  const {
    textsearch = "",
    attribute = "createdAt",
    attribute2 = "createdAt",
    order = "asc",
    page = 0,
    size = 8,
    createDateEnd = "",
    createDateStart = "",
    role = "",
    student = "",
    course = "",
    division = "",
    period = "",
    year = "",
  } = data;
  const requiredStudent = student ? true : false;
  const requiredCourse = course ? true : false;
  const existingUsers = await User.findAndCountAll({
    attributes: [
      "id",
      "identDocument",
      "email",
      "name",
      "lastName",
      "birthdate",
      "image",
      "createdAt",
      "role",
    ],
    include: [
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
      [Op.and]: [
        {
          [Op.or]: [
            //filtro por text
            { name: { [Op.iLike]: `%${textsearch}%` } },
            { lastName: { [Op.iLike]: `%${textsearch}%` } },
            { identDocument: { [Op.iLike]: `%${textsearch}%` } },
            { email: { [Op.iLike]: `%${textsearch}%` } },
          ],
        },
        role && { role: { [Op.eq]: role } },
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

  return { geted: true, existingUsers };
};

module.exports = getUsers;
