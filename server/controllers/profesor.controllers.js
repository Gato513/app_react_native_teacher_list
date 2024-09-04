data = {
    "linkImgFormat": "https://drive.google.com/uc?id=",
    "teachersList": [
        {
            "id": 1,
            "nombre": "Daniel Moreno",
            "imagenId": "1GgFcGWiEqBakiiior22Lf6XNtxFI0PFv",
            "materias": [
                "Laboratorio",
                "software",
                "Algorimica"
            ],
            "descripcion": "Especialista en ciencias exactas con más de 10 años de experiencia en la enseñanza.",
            "contacto": {
                "correo": "Daniel.Moreno@example.com", //! Remplazar por email real
                "telefono": "+595985226582"
            },
            "disponibilidad": "Lunes a Viernes, 10:00 - 14:00"
        },

        {
            "id": 2,
            "nombre": "Lic. Elva González Segovia",
            "imagenId": "1QWk17ch82KF_9XXQZj9f5SA93N9I1nPT", //! Remplazar por url real
            "materias": ["Orientación Educacional y Sociolaboral"],
            "descripcion": "Especialista en Comunicación con 15 años de experiencia",
            "contacto": {
                "correo": "gonzalezelva.1012@gmail.com",
                "telefono": "+595985728854"
            },
            "disponibilidad": "Miércoles: 14:00 - 17:00"
        },

        {
            "id": 3,
            "nombre": "Lic. Ema Carreras",
            "imagenId": "1Y27E1eGpyRW7XuWr8EBglmcD_O5UuTy-",
            "materias": [
                "Administración de Negocios",
                "Contabilidad"
            ],
            "descripcion": "Especialista en Administración de Negocios con 20 años de experiencia.\nEspecializada en administración de empresas, contabilidad con 50 años de experiencia.",
            "contacto": {
                "correo": "ema.carreras@gmail.com",
                "telefono": "+595985105095"
            },
            "disponibilidad": "Lunes a Viernes: 19:00 - 22:00"
        },

        {
            "id": 4,
            "nombre": "Prof. Olga Dolotowycz",
            "imagenId": "15XtDohjvg_h_7fMPasB6uvOWuJtnPCoA",
            "materias": [
                "Matemáticas Aplicada a la informatica"
            ],
            "descripcion": "Docente especializado en matemáticas con 6 años de experiencia",
            "contacto": {
                "correo": "Olgade1083@gmail.com",
                "telefono": "+595975630952"
            },
            "disponibilidad": "Lunes: 6:00 - 9:00\nViernes: 18:00 - 22:00"
        },

        {
            "id": 5,
            "nombre": "Lic. Carolina Meza",
            "imagenId": "1z1ZFQQYN4n0fV-4PVi3i-Tv71_dYI_qP",
            "materias": [
                "Metodología de la Investigación"
            ],
            "descripcion": "Especialista en Metodología de la Investigación con más de 10 años de experiencia.",
            "contacto": {
                "correo": "carolinamezagauto@gmail.com",
                "telefono": "+595972638069"
            },
            "disponibilidad": "Lunes a Jueves: 20:30 en adelante\nViernes: 19:30 en adelante\nSábado y Domingo: Horario completo"
        }
    ]
}

exports.getProfesores = (req, res) => {
    res.json(data);
}

