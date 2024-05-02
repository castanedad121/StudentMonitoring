const bcrypt = require("bcrypt");
const { User, Course, Student } = require("../DB_connection");

async function createBasicData() {
  try {
    // Hago una sola consulta que determina si es necesario agregar todos los datos básicos:
    const existingUsr = await User.findOne({
      where: { identDocument: "12345678" },
    });
    if (!existingUsr) {
      console.log(`First run. Adding basic data...`);
      // TODO Creo las sedes:
      const courseList = [
        {
          nameCourse: "Lenguaje",
          period: "1",
          division: "A",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671887/samples/Student-monitoring/lengua_laajbn.png",
          state: "activo",
          year: "2024",
        },
        {
          nameCourse: "Matemáticas",
          period: "1",
          division: "A",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671889/samples/Student-monitoring/matematicas_mwbyme.png",
          state: "activo",
          year: "2024",
        },
        {
          nameCourse: "Ciencias Sociales",
          period: "1",
          division: "A",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671886/samples/Student-monitoring/ciencia-sociales_bgsjym.png",
          state: "activo",
          year: "2024",
        },
        {
          nameCourse: "Música",
          period: "1",
          division: "A",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671890/samples/Student-monitoring/musica_psmfpg.png",
          state: "activo",
          year: "2024",
        },
        {
          nameCourse: "Ciencias Naturales",
          period: "1",
          division: "A",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671886/samples/Student-monitoring/ciencia-naturales_r6pxgy.png",
          state: "activo",
          year: "2024",
        },
        {
          nameCourse: "Plástica",
          period: "1",
          division: "A",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671891/samples/Student-monitoring/plastica_phfahz.png",
          state: "activo",
          year: "2024",
        },
        {
          nameCourse: "Lenguaje",
          period: "2",
          division: "B",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671887/samples/Student-monitoring/lengua_laajbn.png",
          state: "activo",
          year: "2024",
        },
        {
          nameCourse: "Matemáticas",
          period: "2",
          division: "B",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671889/samples/Student-monitoring/matematicas_mwbyme.png",
          state: "activo",
          year: "2024",
        },
        {
          nameCourse: "Ciencias Sociales",
          period: "2",
          division: "B",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671886/samples/Student-monitoring/ciencia-sociales_bgsjym.png",
          state: "activo",
          year: "2024",
        },
        {
          nameCourse: "Música",
          period: "2",
          division: "B",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671890/samples/Student-monitoring/musica_psmfpg.png",
          state: "activo",
          year: "2024",
        },
        {
          nameCourse: "Ciencias Naturales",
          period: "2",
          division: "B",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671886/samples/Student-monitoring/ciencia-naturales_r6pxgy.png",
          state: "activo",
          year: "2024",
        },
        {
          nameCourse: "Plástica",
          period: "2",
          division: "B",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671891/samples/Student-monitoring/plastica_phfahz.png",
          state: "activo",
          year: "2024",
        },
        {
          nameCourse: "Lenguaje",
          period: "3",
          division: "C",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671887/samples/Student-monitoring/lengua_laajbn.png",
          state: "activo",
          year: "2024",
        },
        {
          nameCourse: "Matemáticas",
          period: "3",
          division: "C",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671889/samples/Student-monitoring/matematicas_mwbyme.png",
          state: "activo",
          year: "2024",
        },
        {
          nameCourse: "Ciencias Sociales",
          period: "3",
          division: "C",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671886/samples/Student-monitoring/ciencia-sociales_bgsjym.png",
          state: "activo",
          year: "2024",
        },
        {
          nameCourse: "Música",
          period: "3",
          division: "C",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671890/samples/Student-monitoring/musica_psmfpg.png",
          state: "activo",
          year: "2024",
        },
        {
          nameCourse: "Ciencias Naturales",
          period: "3",
          division: "C",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671886/samples/Student-monitoring/ciencia-naturales_r6pxgy.png",
          state: "activo",
          year: "2024",
        },
        {
          nameCourse: "Plástica",
          period: "3",
          division: "C",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671891/samples/Student-monitoring/plastica_phfahz.png",
          state: "activo",
          year: "2024",
        },
        {
          nameCourse: "Lenguaje",
          period: "4",
          division: "D",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671887/samples/Student-monitoring/lengua_laajbn.png",
          state: "activo",
          year: "2024",
        },
        {
          nameCourse: "Matemáticas",
          period: "4",
          division: "D",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671889/samples/Student-monitoring/matematicas_mwbyme.png",
          state: "activo",
          year: "2024",
        },
        {
          nameCourse: "Ciencias Sociales",
          period: "4",
          division: "D",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671886/samples/Student-monitoring/ciencia-sociales_bgsjym.png",
          state: "activo",
          year: "2024",
        },
        {
          nameCourse: "Música",
          period: "4",
          division: "D",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671890/samples/Student-monitoring/musica_psmfpg.png",
          state: "activo",
          year: "2024",
        },
        {
          nameCourse: "Ciencias Naturales",
          period: "4",
          division: "D",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671886/samples/Student-monitoring/ciencia-naturales_r6pxgy.png",
          state: "activo",
          year: "2024",
        },
        {
          nameCourse: "Plástica",
          period: "4",
          division: "D",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671891/samples/Student-monitoring/plastica_phfahz.png",
          state: "activo",
          year: "2024",
        },
        {
          nameCourse: "Lenguaje",
          period: "5",
          division: "E",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671887/samples/Student-monitoring/lengua_laajbn.png",
          state: "activo",
          year: "2024",
        },
        {
          nameCourse: "Matemáticas",
          period: "5",
          division: "E",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671889/samples/Student-monitoring/matematicas_mwbyme.png",
          state: "activo",
          year: "2024",
        },
        {
          nameCourse: "Ciencias Sociales",
          period: "5",
          division: "E",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671886/samples/Student-monitoring/ciencia-sociales_bgsjym.png",
          state: "activo",
          year: "2024",
        },
        {
          nameCourse: "Música",
          period: "5",
          division: "E",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671890/samples/Student-monitoring/musica_psmfpg.png",
          state: "activo",
          year: "2024",
        },
        {
          nameCourse: "Ciencias Naturales",
          period: "5",
          division: "E",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671886/samples/Student-monitoring/ciencia-naturales_r6pxgy.png",
          state: "activo",
          year: "2024",
        },
        {
          nameCourse: "Plástica",
          period: "5",
          division: "E",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671891/samples/Student-monitoring/plastica_phfahz.png",
          state: "activo",
          year: "2024",
        },
        {
          nameCourse: "Lenguaje",
          period: "6",
          division: "F",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671887/samples/Student-monitoring/lengua_laajbn.png",
          state: "activo",
          year: "2024",
        },
        {
          nameCourse: "Matemáticas",
          period: "6",
          division: "F",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671889/samples/Student-monitoring/matematicas_mwbyme.png",
          state: "activo",
          year: "2024",
        },
        {
          nameCourse: "Ciencias Sociales",
          period: "6",
          division: "F",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671886/samples/Student-monitoring/ciencia-sociales_bgsjym.png",
          state: "activo",
          year: "2024",
        },
        {
          nameCourse: "Música",
          period: "6",
          division: "F",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671890/samples/Student-monitoring/musica_psmfpg.png",
          state: "activo",
          year: "2024",
        },
        {
          nameCourse: "Ciencias Naturales",
          period: "6",
          division: "F",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671886/samples/Student-monitoring/ciencia-naturales_r6pxgy.png",
          state: "activo",
          year: "2024",
        },
        {
          nameCourse: "Plástica",
          period: "6",
          division: "F",
          image:
            "https://res.cloudinary.com/desaac6ma/image/upload/v1713671891/samples/Student-monitoring/plastica_phfahz.png",
          state: "activo",
          year: "2024",
        },
      ];

      const studentListLenguaje1A = [
        {
          identDocument: 82740513,
          name: "Mateo",
          lastName: "Garcia",
          birthdate: "2012-01-12",
        },
        {
          identDocument: 34928765,
          name: "Sofia",
          lastName: "Muller",
          birthdate: "2011-05-03",
        },
        {
          identDocument: 56291478,
          name: "Lucas",
          lastName: "Rousy",
          birthdate: "2012-08-07",
        },
        {
          identDocument: 19872365,
          name: "Valentina",
          lastName: "Rossi",
          birthdate: "2011-11-11",
        },
        {
          identDocument: 63571924,
          name: "Santiago",
          lastName: "Kowalski",
          birthdate: "2012-09-06",
        },
        {
          identDocument: 19837264,
          name: "Luis",
          lastName: "Santana",
          birthdate: "2012-04-25",
        },
        {
          identDocument: 57391482,
          name: "Ana",
          lastName: "Gutierrez",
          birthdate: "2011-08-28",
        },
        {
          identDocument: 64983127,
          name: "Pedro",
          lastName: "Castro",
          birthdate: "2012-06-30",
        },
        {
          identDocument: 72468913,
          name: "Carla",
          lastName: "Rivas",
          birthdate: "2011-10-03",
        },
        {
          identDocument: 83749261,
          name: "Rafael",
          lastName: "Diaz",
          birthdate: "2012-12-05",
        },
      ];
      const studentListMatematicas2B = [
        {
          identDocument: 47268391,
          name: "Isabella",
          lastName: "Lopez",
          birthdate: "2011-02-04",
        },
        {
          identDocument: 91625738,
          name: "Daniel",
          lastName: "Nowak",
          birthdate: "2012-10-10",
        },
        {
          identDocument: 58302746,
          name: "Maria",
          lastName: "Martinez",
          birthdate: "2011-12-09",
        },
        {
          identDocument: 20491657,
          name: "Nicolas",
          lastName: "Wagner",
          birthdate: "2012-03-02",
        },
        {
          identDocument: 76945283,
          name: "Camila",
          lastName: "Ricci",
          birthdate: "2011-07-05",
        },
        {
          identDocument: 29485137,
          name: "Julia",
          lastName: "Alonso",
          birthdate: "2012-02-08",
        },
        {
          identDocument: 61782934,
          name: "Marcos",
          lastName: "Hernandez",
          birthdate: "2011-07-11",
        },
        {
          identDocument: 82364917,
          name: "Laura",
          lastName: "Martinez",
          birthdate: "2012-05-14",
        },
        {
          identDocument: 95183472,
          name: "Javier",
          lastName: "Garcia",
          birthdate: "2011-11-16",
        },
        {
          identDocument: 73619842,
          name: "Carolina",
          lastName: "Perez",
          birthdate: "2012-09-19",
        },
      ];
      const studentListLenguaje3C = [
        {
          identDocument: 34529781,
          name: "Sebastian",
          lastName: "Brown",
          birthdate: "2012-06-08",
        },
        {
          identDocument: 62873194,
          name: "Valeria",
          lastName: "Fernandez",
          birthdate: "2011-04-01",
        },
        {
          identDocument: 15938247,
          name: "Alejandro",
          lastName: "Wojcik",
          birthdate: "2012-09-10",
        },
        {
          identDocument: 74256931,
          name: "Lucia",
          lastName: "Conti",
          birthdate: "2011-11-06",
        },
        {
          identDocument: 83417629,
          name: "Diego",
          lastName: "Rodriguez",
          birthdate: "2012-12-04",
        },
        {
          identDocument: 37469281,
          name: "Manuel",
          lastName: "Sanchez",
          birthdate: "2012-01-21",
        },
        {
          identDocument: 52941376,
          name: "Mariano",
          lastName: "Lopez",
          birthdate: "2011-06-24",
        },
        {
          identDocument: 68193742,
          name: "Andrea",
          lastName: "Rodriguez",
          birthdate: "2012-04-27",
        },
        {
          identDocument: 85729613,
          name: "Lucia",
          lastName: "Fernandez",
          birthdate: "2011-10-29",
        },
        {
          identDocument: 41378529,
          name: "Federico",
          lastName: "Martinez",
          birthdate: "2012-12-01",
        },
      ];
      const studentListMatematicas4D = [
        {
          identDocument: 95374286,
          name: "Elena",
          lastName: "Gomez",
          birthdate: "2012-03-15",
        },
        {
          identDocument: 62481735,
          name: "Maximiliano",
          lastName: "Lopez",
          birthdate: "2011-07-18",
        },
        {
          identDocument: 84125937,
          name: "Carolina",
          lastName: "Sanchez",
          birthdate: "2012-05-20",
        },
        {
          identDocument: 57398164,
          name: "Facundo",
          lastName: "Vega",
          birthdate: "2011-11-22",
        },
        {
          identDocument: 36281479,
          name: "Mariana",
          lastName: "Rodriguez",
          birthdate: "2012-09-26",
        },
        {
          identDocument: 28673194,
          name: "Martina",
          lastName: "Alvarez",
          birthdate: "2012-03-04",
        },
        {
          identDocument: 61943728,
          name: "Joaquin",
          lastName: "Gomez",
          birthdate: "2011-08-07",
        },
        {
          identDocument: 83246913,
          name: "Lorena",
          lastName: "Perez",
          birthdate: "2012-06-09",
        },
        {
          identDocument: 95472361,
          name: "Gabriel",
          lastName: "Garcia",
          birthdate: "2011-12-12",
        },
        {
          identDocument: 73861924,
          name: "Juliana",
          lastName: "Lopez",
          birthdate: "2012-09-15",
        },
      ];
      const studentListLenguaje5E = [
        {
          identDocument: 79531864,
          name: "Agustin",
          lastName: "Torres",
          birthdate: "2011-04-29",
        },
        {
          identDocument: 21863749,
          name: "Antonio",
          lastName: "Alvarez",
          birthdate: "2012-08-02",
        },
        {
          identDocument: 43629571,
          name: "Valeria",
          lastName: "Garcia",
          birthdate: "2011-06-04",
        },
        {
          identDocument: 75198264,
          name: "Francisco",
          lastName: "Mendez",
          birthdate: "2012-10-07",
        },
        {
          identDocument: 31984275,
          name: "Delfina",
          lastName: "Perez",
          birthdate: "2011-12-09",
        },
        {
          identDocument: 29673184,
          name: "Renata",
          lastName: "Fernandez",
          birthdate: "2012-04-25",
        },
        {
          identDocument: 61349728,
          name: "Facundo",
          lastName: "Martinez",
          birthdate: "2011-08-28",
        },
        {
          identDocument: 82934716,
          name: "Lucas",
          lastName: "Gomez",
          birthdate: "2012-06-30",
        },
        {
          identDocument: 74361928,
          name: "Luna",
          lastName: "Perez",
          birthdate: "2011-10-03",
        },
        {
          identDocument: 83741629,
          name: "Federico",
          lastName: "Diaz",
          birthdate: "2012-12-05",
        },
      ];
      const studentListMatematicas6F = [
        {
          identDocument: 56813294,
          name: "Lautaro",
          lastName: "Rios",
          birthdate: "2012-02-11",
        },
        {
          identDocument: 92461738,
          name: "Martina",
          lastName: "Lopez",
          birthdate: "2011-07-14",
        },
        {
          identDocument: 48731529,
          name: "Tomas",
          lastName: "Gonzalez",
          birthdate: "2012-05-17",
        },
        {
          identDocument: 63519274,
          name: "Rocio",
          lastName: "Fernandez",
          birthdate: "2011-11-19",
        },
        {
          identDocument: 83129745,
          name: "Luciano",
          lastName: "Martinez",
          birthdate: "2012-09-23",
        },
        {
          identDocument: 23164789,
          name: "Renzo",
          lastName: "Alonso",
          birthdate: "2012-02-08",
        },
        {
          identDocument: 61783492,
          name: "Luciana",
          lastName: "Hernandez",
          birthdate: "2011-07-11",
        },
        {
          identDocument: 82416937,
          name: "Mia",
          lastName: "Martinez",
          birthdate: "2012-05-14",
        },
        {
          identDocument: 95481736,
          name: "Ivan",
          lastName: "Garcia",
          birthdate: "2011-11-16",
        },
        {
          identDocument: 73681942,
          name: "Martina",
          lastName: "Perez",
          birthdate: "2012-09-19",
        },
      ];

      const administrador = {
        identDocument: 12345678,
        email: "pablogoncalves@studentmonitoring.com",
        password: "Admin1234",
        name: "Paulo",
        lastName: "Goncalves",
        birthdate: "1990-12-12",
        role: "Administrador",
      };

      const docentes = [
        {
          identDocument: 12348765,
          email: "valentinsanchez@studentmonitoring.com",
          password: "Docente1234",
          name: "Valentin",
          lastName: "Sanchez",
          birthdate: "1990-01-21",
          role: "Docente",
        },
        {
          identDocument: 52194736,
          email: "manuelalopez@studentmonitoring.com",
          password: "52194736",
          name: "Manuela",
          lastName: "Lopez",
          birthdate: "1989-06-24",
          role: "Docente",
        },
        {
          identDocument: 68749231,
          email: "lautarorodriguez@studentmonitoring.com",
          password: "68749231",
          name: "Lautaro",
          lastName: "Rodriguez",
          birthdate: "1987-04-27",
          role: "Docente",
        },
        {
          identDocument: 85926713,
          email: "lucianafernandez@studentmonitoring.com",
          password: "85926713",
          name: "Luciana",
          lastName: "Fernandez",
          birthdate: "1988-10-29",
          role: "Docente",
        },
        {
          identDocument: 41785329,
          email: "facundomartinez@studentmonitoring.com",
          password: "41785329",
          name: "Facundo",
          lastName: "Martinez",
          birthdate: "1986-12-01",
          role: "Docente",
        },
      ];

      const apoderados = [
        {
          identDocument: 87654321,
          email: "mateoalvarez@gmail.com",
          password: "Apoderado1234",
          name: "Mateo",
          lastName: "Alvarez",
          birthdate: "1992-03-04",
          role: "Apoderado",
        },
        {
          identDocument: 61723948,
          email: "martingomez@gmail.com",
          password: "61723948",
          name: "Martin",
          lastName: "Gomez",
          birthdate: "1985-08-07",
          role: "Apoderado",
        },
        {
          identDocument: 83264197,
          email: "luciaperez@gmail.com",
          password: "83264197",
          name: "Lucia",
          lastName: "Perez",
          birthdate: "1987-06-09",
          role: "Apoderado",
        },
        {
          identDocument: 95472316,
          email: "gabrielgarcia@gmail.com",
          password: "95472316",
          name: "Gabriela",
          lastName: "Garcia",
          birthdate: "1991-12-12",
          role: "Apoderado",
        },
        {
          identDocument: 73841926,
          email: "julietalopez@gmail.com",
          password: "73841926",
          name: "Julieta",
          lastName: "Lopez",
          birthdate: "1988-09-15",
          role: "Apoderado",
        },
      ];
      const hashedPasswordDocent0 = await bcrypt.hash(docentes[0].password, 10);
      const [docenteLen, createdDocenteLen] = await User.findOrCreate({
        where: { identDocument: docentes[0].identDocument.toString() },
        defaults: {
          email: docentes[0].email,
          password: hashedPasswordDocent0,
          name: docentes[0].name,
          lastName: docentes[0].lastName,
          birthdate: docentes[0].birthdate,
          image: null,
          role: docentes[0].role,
        },
      });
      console.log("docente of Matemáticas created...");

      const hashedPasswordDocent1 = await bcrypt.hash(docentes[1].password, 10);
      const [docenteMat, createdDocenteMat] = await User.findOrCreate({
        where: { identDocument: docentes[1].identDocument.toString() },
        defaults: {
          email: docentes[1].email,
          password: hashedPasswordDocent1,
          name: docentes[1].name,
          lastName: docentes[1].lastName,
          birthdate: docentes[1].birthdate,
          image: null,
          role: docentes[1].role,
        },
      });
      console.log("docente of Lenguaje created...");

      for (let i = 2; i < docentes.length; i++) {
        let hashedPasswordDocente = await bcrypt.hash(docentes[i].password, 10);
        const [docente, createdDocente] = await User.findOrCreate({
          where: { identDocument: docentes[i].identDocument.toString() },
          defaults: {
            email: docentes[i].email,
            password: hashedPasswordDocente,
            name: docentes[i].name,
            lastName: docentes[i].lastName,
            birthdate: docentes[i].birthdate,
            image: null,
            role: docentes[i].role,
          },
        });
      }
      console.log("docentes created...");
      for (const course of courseList) {
        const numberSerial = `${course.nameCourse
          .split(" ")
          .join("")
          .toUpperCase()}${course.period}${course.division}${course.year}`;
        const [courseCreated, created] = await Course.findOrCreate({
          where: { serialNumber: numberSerial },
          defaults: {
            nameCourse: course.nameCourse,
            period: course.period,
            division: course.division,
            image: course.image,
            state: course.state,
            year: course.year,
          },
        });
        if (
          numberSerial === "LENGUAJE1A2024" ||
          numberSerial === "LENGUAJE2B2024" ||
          numberSerial === "LENGUAJE3C2024" ||
          numberSerial === "LENGUAJE4D2024" ||
          numberSerial === "LENGUAJE5E2024" ||
          numberSerial === "LENGUAJE6F2024"
        ) {
          const docente = await User.findOne({
            where: { identDocument: docentes[0].identDocument.toString() },
          });
          docente && courseCreated.setUser(docente);
        }
        if (
          numberSerial === "MATEMÁTICAS1A2024" ||
          numberSerial === "MATEMÁTICAS2B2024" ||
          numberSerial === "MATEMÁTICAS3C2024" ||
          numberSerial === "MATEMÁTICAS4D2024" ||
          numberSerial === "MATEMÁTICAS5E2024" ||
          numberSerial === "MATEMÁTICAS6F2024"
        ) {
          const docente = await User.findOne({
            where: { identDocument: docentes[1].identDocument.toString() },
          });
          docente && courseCreated.setUser(docente);
        }
        if (
          numberSerial === "CIENCIASSOCIALES1A2024" ||
          numberSerial === "CIENCIASSOCIALES2B2024" ||
          numberSerial === "CIENCIASSOCIALES3C2024" ||
          numberSerial === "CIENCIASSOCIALES4D2024" ||
          numberSerial === "CIENCIASSOCIALES5E2024" ||
          numberSerial === "CIENCIASSOCIALES6F2024"
        ) {
          const docente = await User.findOne({
            where: { identDocument: docentes[2].identDocument.toString() },
          });
          docente && courseCreated.setUser(docente);
        }
        if (
          numberSerial === "CIENCIASNATURALES1A2024" ||
          numberSerial === "CIENCIASNATURALES2B2024" ||
          numberSerial === "CIENCIASNATURALES3C2024" ||
          numberSerial === "CIENCIASNATURALES4D2024" ||
          numberSerial === "CIENCIASNATURALES5E2024" ||
          numberSerial === "CIENCIASNATURALES6F2024"
        ) {
          const docente = await User.findOne({
            where: { identDocument: docentes[3].identDocument.toString() },
          });
          docente && courseCreated.setUser(docente);
        }
        if (
          numberSerial === "MÚSICA1A2024" ||
          numberSerial === "MÚSICA2B2024" ||
          numberSerial === "MÚSICA3C2024" ||
          numberSerial === "MÚSICA4D2024" ||
          numberSerial === "MÚSICA5E2024" ||
          numberSerial === "MÚSICA6F2024" ||
          numberSerial === "PLÁSTICA1A2024" ||
          numberSerial === "PLÁSTICA2B2024" ||
          numberSerial === "PLÁSTICA3C2024" ||
          numberSerial === "PLÁSTICA4D2024" ||
          numberSerial === "PLÁSTICA5E2024" ||
          numberSerial === "PLÁSTICA6F2024"
        ) {
          const docente = await User.findOne({
            where: {
              identDocument: docentes[4].identDocument.toString(),
            },
          });
          docente && courseCreated.setUser(docente);
        }
      }
      console.log(`... courses created`);
      const hashedPasswordAdmin = await bcrypt.hash(administrador.password, 10);
      const [userAdmin, created] = await User.findOrCreate({
        where: { identDocument: administrador.identDocument.toString() },
        defaults: {
          email: administrador.email,
          password: hashedPasswordAdmin,
          name: administrador.name,
          lastName: administrador.lastName,
          birthdate: administrador.birthdate,
          image: null,
          role: administrador.role,
        },
      });
      console.log(`... Administrador created`);

      let courseLenguaje1A;
      for (let i = 0; i < studentListLenguaje1A.length; i++) {
        const [student, created] = await Student.findOrCreate({
          where: {
            identDocument: studentListLenguaje1A[i].identDocument.toString(),
          },
          defaults: {
            name: studentListLenguaje1A[i].name,
            lastName: studentListLenguaje1A[i].lastName,
            birthdate: studentListLenguaje1A[i].birthdate,
            image: null,
          },
        });
        courseLenguaje1A = await Course.findOne({
          where: { serialNumber: "LENGUAJE1A2024" },
        });
        courseLenguaje1A && (await student.addCourse(courseLenguaje1A));
      }

      let courseMate2B;
      for (let i = 0; i < studentListMatematicas2B.length; i++) {
        const [student, created] = await Student.findOrCreate({
          where: {
            identDocument: studentListMatematicas2B[i].identDocument.toString(),
          },
          defaults: {
            name: studentListMatematicas2B[i].name,
            lastName: studentListMatematicas2B[i].lastName,
            birthdate: studentListMatematicas2B[i].birthdate,
            image: null,
          },
        });
        courseMate2B = await Course.findOne({
          where: { serialNumber: "MATEMÁTICAS2B2024" },
        });
        courseMate2B && (await student.addCourse(courseMate2B));
      }

      let courseLenguaje3C;
      for (let i = 0; i < studentListLenguaje3C.length; i++) {
        const [student, created] = await Student.findOrCreate({
          where: {
            identDocument: studentListLenguaje3C[i].identDocument.toString(),
          },
          defaults: {
            name: studentListLenguaje3C[i].name,
            lastName: studentListLenguaje3C[i].lastName,
            birthdate: studentListLenguaje3C[i].birthdate,
            image: null,
          },
        });
        courseLenguaje3C = await Course.findOne({
          where: { serialNumber: "LENGUAJE3C2024" },
        });
        courseLenguaje3C && (await student.addCourse(courseLenguaje3C));
      }

      let courseMate4D;
      for (let i = 0; i < studentListMatematicas4D.length; i++) {
        const [student, created] = await Student.findOrCreate({
          where: {
            identDocument: studentListMatematicas4D[i].identDocument.toString(),
          },
          defaults: {
            name: studentListMatematicas4D[i].name,
            lastName: studentListMatematicas4D[i].lastName,
            birthdate: studentListMatematicas4D[i].birthdate,
            image: null,
          },
        });
        courseMate4D = await Course.findOne({
          where: { serialNumber: "MATEMÁTICAS4D2024" },
        });
        courseMate4D && (await student.addCourse(courseMate4D));
      }

      let courseLenguaje5E;
      for (let i = 0; i < studentListLenguaje5E.length; i++) {
        const [student, created] = await Student.findOrCreate({
          where: {
            identDocument: studentListLenguaje3C[i].identDocument.toString(),
          },
          defaults: {
            name: studentListLenguaje5E[i].name,
            lastName: studentListLenguaje5E[i].lastName,
            birthdate: studentListLenguaje5E[i].birthdate,
            image: null,
          },
        });
        courseLenguaje5E = await Course.findOne({
          where: { serialNumber: "LENGUAJE5E2024" },
        });
        courseLenguaje5E && (await student.addCourse(courseLenguaje5E));
      }

      let courseMate6F;
      for (let i = 0; i < studentListMatematicas6F.length; i++) {
        const [student, created] = await Student.findOrCreate({
          where: {
            identDocument: studentListMatematicas6F[i].identDocument.toString(),
          },
          defaults: {
            name: studentListMatematicas6F[i].name,
            lastName: studentListMatematicas6F[i].lastName,
            birthdate: studentListMatematicas6F[i].birthdate,
            image: null,
          },
        });
        courseMate6F = await Course.findOne({
          where: { serialNumber: "MATEMÁTICAS6F2024" },
        });
        courseMate6F && (await student.addCourse(courseMate6F));
      }
      console.log(" students created...");

      const passwordApoderado0 = await bcrypt.hash(apoderados[0].password, 10);
      const [apoderado0, createdApoderado0] = await User.findOrCreate({
        where: { identDocument: apoderados[0].identDocument.toString() },
        defaults: {
          email: apoderados[0].email,
          password: passwordApoderado0,
          name: apoderados[0].name,
          lastName: apoderados[0].lastName,
          birthdate: apoderados[0].birthdate,
          image: null,
          role: apoderados[0].role,
        },
      });
      const student0 = await Student.findOne({
        where: {
          identDocument: studentListLenguaje1A[0].identDocument.toString(),
        },
      });
      student0 && (await apoderado0.addStudents(student0));

      const passwordApoderado1 = await bcrypt.hash(apoderados[1].password, 10);
      const [apoderado1, createdApoderado1] = await User.findOrCreate({
        where: { identDocument: apoderados[1].identDocument.toString() },
        defaults: {
          email: apoderados[1].email,
          password: passwordApoderado1,
          name: apoderados[1].name,
          lastName: apoderados[1].lastName,
          birthdate: apoderados[1].birthdate,
          image: null,
          role: apoderados[1].role,
        },
      });
      const student1 = await Student.findOne({
        where: {
          identDocument: studentListMatematicas2B[1].identDocument.toString(),
        },
      });
      student1 && (await apoderado1.addStudents(student1));

      const passwordApoderado2 = await bcrypt.hash(apoderados[2].password, 10);
      const [apoderado2, createdApoderado2] = await User.findOrCreate({
        where: { identDocument: apoderados[2].identDocument.toString() },
        defaults: {
          email: apoderados[2].email,
          password: passwordApoderado2,
          name: apoderados[2].name,
          lastName: apoderados[2].lastName,
          birthdate: apoderados[2].birthdate,
          image: null,
          role: apoderados[2].role,
        },
      });
      const student2 = await Student.findOne({
        where: {
          identDocument: studentListLenguaje3C[2].identDocument.toString(),
        },
      });
      student2 && (await apoderado2.addStudents(student2));

      const passwordApoderado3 = await bcrypt.hash(apoderados[3].password, 10);
      const [apoderado3, createdApoderado3] = await User.findOrCreate({
        where: { identDocument: apoderados[3].identDocument.toString() },
        defaults: {
          email: apoderados[3].email,
          password: passwordApoderado3,
          name: apoderados[3].name,
          lastName: apoderados[3].lastName,
          birthdate: apoderados[3].birthdate,
          image: null,
          role: apoderados[3].role,
        },
      });
      const student3 = await Student.findOne({
        where: {
          identDocument: studentListMatematicas4D[3].identDocument.toString(),
        },
      });
      student3 && (await apoderado3.addStudents(student3));

      const passwordApoderado4 = await bcrypt.hash(apoderados[4].password, 10);
      const [apoderado4, createdApoderado4] = await User.findOrCreate({
        where: { identDocument: apoderados[4].identDocument.toString() },
        defaults: {
          email: apoderados[4].email,
          password: passwordApoderado4,
          name: apoderados[4].name,
          lastName: apoderados[4].lastName,
          birthdate: apoderados[4].birthdate,
          image: null,
          role: apoderados[4].role,
        },
      });
      const student4 = await Student.findOne({
        where: {
          identDocument: studentListLenguaje5E[3].identDocument.toString(),
        },
      });
      student4 && (await apoderado4.addStudents(student4));
      console.log("Apoderados created...");
    }
  } catch (error) {
    console.log(`Error creating basic data: ${error}`);
    throw Error("Error creando datos básicos: " + error);
  }
}

module.exports = createBasicData;
