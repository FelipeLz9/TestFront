import React from 'react';
import './Instructores.css';

interface Instructor {
  name: string;
  role: string;
  email: string;
  experience: string;
  specialties: string;
  imageUrl: string;
}

const instructors: Instructor[] = [
  {
    name: 'Ana García',
    role: 'Instructora de Yoga y Pilates',
    email: 'ana@escueladeportiva.com',
    experience: '8 años enseñando yoga y pilates, con certificaciones internacionales.',
    specialties: 'Flexibilidad, bienestar mental, y equilibrio físico.',
    imageUrl: 'https://www.polisura.edu.co/wp-content/uploads/2024/02/instructor-fitness.jpg',
  },
  {
    name: 'Juan Pérez',
    role: 'Instructor de Boxeo y Entrenamiento Funcional',
    email: 'juan@escueladeportiva.com',
    experience: '10 años entrenando boxeo y atletas de alto rendimiento.',
    specialties: 'Preparación física, fuerza, resistencia, y técnica de combate.',
    imageUrl: 'https://img.freepik.com/fotos-premium/entrenador-e-instructor-fitness-feliz-deportivo_1077802-57918.jpg',
  },
  
  {
    name: 'Carlos Martínez',
    role: 'Instructor de HIIT y CrossFit',
    email: 'carlos@escueladeportiva.com',
    experience: '5 años como entrenador de CrossFit y clases de alta intensidad.',
    specialties: 'Condicionamiento físico, entrenamiento en intervalos, y técnicas de levantamiento de pesas.',
    imageUrl: 'https://cdn.static.aptavs.com/imagenes/14-estrategias-de-marketing-para-entrenadores-personales/participar-en-entrevistas-o-podcasts-relacionados-con-el-fitness_905x603.jpg',
  },
];

const Instructores: React.FC = () => {
  return (
    <section>
      <h1>Conoce a Nuestros Instructores</h1>
      <p>En el Club Deportivo Fuerza y Salud, nuestro equipo de instructores está aquí para ayudarte a alcanzar tus objetivos de fitness. Cada uno de ellos aporta una gran experiencia y habilidades especializadas.</p>

      <div className="instructor-cards">
        {instructors.map((instructor, index) => (
          <div className="card" key={index}>
            <img src={instructor.imageUrl} alt={instructor.name} className="card-image" />
            <div className="card-content">
              <h3>{instructor.name}</h3>
              <p><strong>Rol:</strong> {instructor.role}</p>
              <p><strong>Experiencia:</strong> {instructor.experience}</p>
              <p><strong>Especialidades:</strong> {instructor.specialties}</p>
              <p><strong>Email:</strong> <a href={`mailto:${instructor.email}`}>{instructor.email}</a></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instructores;
