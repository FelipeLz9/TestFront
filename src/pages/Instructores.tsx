import React, { useEffect, useState } from 'react';
import './Instructores.css';

interface Instructor {
  name: string;
  role: string;
  email: string;
  experience: string;
  specialties: string;
  imageUrl: string;
}

const Instructores: React.FC = () => {
  const [instructors, setInstructors] = useState<Instructor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const response = await fetch('/instructores.json');
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data: Instructor[] = await response.json();
        setInstructors(data);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Error desconocido');
        }
        setLoading(false);
      }
    };

    fetchInstructors();
  }, []);

  if (loading) {
    return <p>Cargando instructores...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

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
