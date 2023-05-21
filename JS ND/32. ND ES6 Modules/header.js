export function createHeader(app) {
  app.innerHTML += `
<div id="another-html">
<table>
  <tr>
    <th>Brand</th>
    <td>BMW</td>
    <th>Model</th>
    <td>X5</td>
  </tr>
  <tr>
    <th>Engine</th>
    <td>Petrol</td>
    <th>Wheel Drive</th>
    <td>4 wheel drive</td>
  </tr>
</table>
</div>`;
}
