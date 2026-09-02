const STUDENTS = [
    "Vayoleth Alean", "Marleidis Arcia", "Salome Ayala", "Michell Bernal",
    "Luisa Campo", "Angelica Castillo", "Liana Cogollo", "Diego Correa",
    "Juliana Garces", "Ivan Gonzalez", "Yeimi Gonzalez", "Tania Gonzalez",
    "Esteban Jarava", "Deimer Lamar", "Daniela Leon", "Maria Llanos",
    "Sharon Martinez", "Brayan Misas", "Juan Monterrosa", "Mariana Montiel",
    "Luisa Moreno", "Maria Orrego", "Dulce Osorio", "Ximena Padilla",
    "Maria Palomino", "Katerin Peña", "Keith Perez", "Yilver Perez",
    "Ana Polo", "Asbel Rivera", "Julian Sanchez", "Allison Sanchez",
    "Dina Solar", "Heylin Soto", "Madeleine Suarez", "Saray Tapias",
    "Sofia Valbuena"
];

function populateStudentsDropdown() {
    const select = document.getElementById('player-name-input');
    if (!select) return;

    // Limpiar todas las opciones existentes excepto la primera ("Select your name...")
    while (select.options.length > 1) {
        select.remove(1);
    }

    // Agregar estudiantes de la lista plana
    STUDENTS.forEach(studentName => {
        const option = document.createElement('option');
        option.value = studentName;
        option.textContent = studentName;
        select.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', populateStudentsDropdown);
