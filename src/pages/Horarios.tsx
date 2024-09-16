import React from 'react';
import './Horarios.css';

const Horarios: React.FC = () => {
  return (
    <section>
      <h1>Horarios de Clases</h1>
      <p>En el Club Deportivo Fuerza y Salud ofrecemos una amplia variedad de clases durante toda la semana para ajustarnos a tus horarios y necesidades. Ya seas un principiante o un atleta avanzado, nuestras clases están diseñadas para desafiarte y ayudarte a alcanzar tus objetivos.</p>

      <h2>Horario Semanal</h2>
      <p>A continuación, te presentamos el horario de nuestras actividades más populares. Todas nuestras clases están dirigidas por instructores certificados que te guiarán paso a paso para asegurar que obtengas el máximo provecho de tu entrenamiento.</p>

      <table>
        <thead>
          <tr>
            <th>Día</th>
            <th>Hora</th>
            <th>Clase</th>
            <th>Instructor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lunes</td>
            <td>10:00 - 12:00</td>
            <td>Yoga</td>
            <td>Ana García</td>
          </tr>
          <tr>
            <td>Lunes</td>
            <td>14:00 - 15:00</td>
            <td>HIIT (Entrenamiento de Intervalos)</td>
            <td>Carlos Martínez</td>
          </tr>
          <tr>
            <td>Martes</td>
            <td>17:00 - 18:30</td>
            <td>Pilates</td>
            <td>Ana Garcia</td>
          </tr>
          <tr>
            <td>Miércoles</td>
            <td>09:00 - 10:30</td>
            <td>Boxeo</td>
            <td>Juan Pérez</td>
          </tr>
          <tr>
            <td>Jueves</td>
            <td>18:00 - 19:30</td>
            <td>Entrenamiento Funcional</td>
            <td>Carlos Martínez</td>
          </tr>
          <tr>
            <td>Viernes</td>
            <td>19:00 - 20:30</td>
            <td>Zumba</td>
            <td>Carlos Martínez</td>
          </tr>
        </tbody>
      </table>

      <h2>Clases Especiales</h2>
      <p>Además de nuestras clases regulares, ofrecemos sesiones especiales los fines de semana que incluyen:</p>
      <ul>
        <li><strong>Yoga al aire libre:</strong> Sábados a las 09:00 en el parque central.</li>
        <li><strong>Entrenamiento de resistencia extrema:</strong> Domingos a las 08:00, enfocado en preparación física para deportes de alta intensidad.</li>
      </ul>

      <h2>Política de Reservas</h2>
      <p>Para garantizar tu lugar en las clases más concurridas, te recomendamos realizar una reserva con al menos 24 horas de antelación a través de nuestra aplicación o en la recepción del club. Si no puedes asistir a una clase reservada, avísanos con 12 horas de anticipación para liberar el cupo para otro miembro.</p>
    </section>
  );
};

export default Horarios;
