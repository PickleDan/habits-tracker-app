import React from "react";

export default function Table() {
  return (
    <div className="table-wrapper container">
      <table className="table table-bordered">
        <tr>
          <th scope="col">Навык</th>
          <td>Отслеживание привычки</td>
          <td>Чтение книги</td>
          <td>Спорт зал</td>
          <td>Ранний подъем</td>
          <td></td>
          <td>Потенциал дня</td>
        </tr>
        <tr>
          <th scope="col">Норма</th>
          <td>Ежедневно</td>
          <td>30мин</td>
          <td>3р/нед</td>
          <td>6:30</td>
          <td></td>
          <td>1...10</td>
        </tr>
        <tr className="status-cell">
          <th scope="col">01.02.20</th>
          <td>
            <div className="green-mark"></div>
          </td>
          <td>
            <div className="green-mark"></div>
          </td>
          <td>
            <div className="green-mark"></div>
          </td>
          <td>
            <div className="green-mark"></div>
          </td>
          <td></td>
          <td>8</td>
        </tr>
        <tr className="status-cell">
          <th scope="col">02.02.20</th>
          <td>
            <div className="green-mark"></div>
          </td>
          <td>
            <div className="red-mark"></div>
          </td>
          <td>
            <div className="green-mark"></div>
          </td>
          <td>
            <div className="green-mark"></div>
          </td>
          <td></td>
          <td>6</td>
        </tr>
        <tr className="status-cell">
          <th scope="col">03.02.20</th>
          <td>
            <div className="green-mark"></div>
          </td>
          <td>
            <div className="red-mark"></div>
          </td>
          <td>
            <div className="neutral-mark"></div>
          </td>
          <td>
            <div className="green-mark"></div>
          </td>
          <td></td>
          <td>5</td>
        </tr>
      </table>
    </div>
  );
}
