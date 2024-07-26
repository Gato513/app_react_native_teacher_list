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
                "correo": "Daniel.Moreno@example.com",
                "telefono": "+595995371679"
            },
            "disponibilidad": "Lunes a Viernes, 10:00 - 14:00"
        },

        {
            "id": 2,
            "nombre": "Sra. María López",
            "imagenId": "1z1ZFQQYN4n0fV-4PVi3i-Tv71_dYI_qP",
            "materias": [
                "Literatura",
                "Historia",
                "Arte"
            ],
            "descripcion": "Experta en literatura clásica y moderna con un enfoque en la literatura latinoamericana.",
            "contacto": {
                "correo": "maria.lopez@example.com",
                "telefono": "+0987654321"
            },
            "disponibilidad": "Martes y Jueves, 14:00 - 18:00"
        },

        {
            "id": 3,
            "nombre": "Ing. Carlos Gómez",
            "imagenId": "1vIeOQ-NpMKmrioGuzDgY08_fgfvUqo1u",
            "materias": [
                "Programación",
                "Sistemas Operativos",
                "Redes"
            ],
            "descripcion": "Ingeniero en sistemas con experiencia en desarrollo de software y redes.",
            "contacto": {
                "correo": "carlos.gomez@example.com",
                "telefono": "+1122334455"
            },
            "disponibilidad": "Lunes, Miércoles y Viernes, 09:00 - 12:00"
        },

        {
            "id": 4,
            "nombre": "Dr. Ana Fernández",
            "imagenId": "1QWk17ch82KF_9XXQZj9f5SA93N9I1nPT",
            "materias": [
                "Biología",
                "Ecología",
                "Genética"
            ],
            "descripcion": "Investigadora en biología molecular con énfasis en genética y ecología.",
            "contacto": {
                "correo": "ana.fernandez@example.com",
                "telefono": "+1223344556"
            },
            "disponibilidad": "Lunes, Miércoles y Viernes, 11:00 - 15:00"
        }
    ]
}

exports.getProfesores = (req, res) => {
    res.json(data);
}

