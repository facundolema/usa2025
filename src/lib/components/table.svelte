<script>
    export let data;

    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
</script>

<table>
    <tr>
        <th>Sobre la propuesta</th>
        <td>Duración del viaje</td>
        <td>{data["duration"]} días</td>
    </tr>
    <tr>
        <th rowspan="5"></th>
        <td>Mejor temporada</td>
        <td>{data["best_season"]}</td>
    </tr>
    <tr>
        <td>Montañas</td>
        <td>{data["mountain"] ? 'Sí': 'No'}</td>
    </tr>
    <tr>
        <td>Playas</td>
        <td>{data["beach"] ? 'Sí': 'No'}</td>
    </tr>
    <tr>
        <td>Ciudades</td>
        <td>{data["city"] ? 'Sí': 'No'}</td>
    </tr>
    <tr>
        <td>Parques de diversiones</td>
        <td>{data["city"] ? 'Sí': 'No'}</td>
    </tr>
    <tr>
        <th>Sobre las paradas</th>
        <td>Paradas</td>
        <td>{data["total_stops"]}</td>
    </tr>
    <tr>
        <th rowspan="3"></th>
        <td>Tiempo promedio entre paradas</td>
        <td>{data["average_travel_time"]} horas</td>
    </tr>
    <tr>
        <td>Días de transito</td>
        <td>{data["transit_days"]} días</td>
    </tr>
    <tr>
        <td>Distancia total</td>
        <td>{data["distance"]} km</td>
    </tr>
    <tr>
        <th>Sobre los costos (6)</th>
        <td>Vuelos</td>
        <td>{USDollar.format(data["detailed_price"]["plane_ticket"])}</td>
    </tr>
    <tr>
        <th rowspan="5"></th>
        <td>Alquiler de auto</td>
        <td>{USDollar.format(data["detailed_price"]["car"])}</td>
    </tr>
    <tr>
        <td>Nafta</td>
        <td>{USDollar.format(data["detailed_price"]["gas"])}</td>
    </tr>
    <tr>
        <td>Alojamiento</td>
        <td>{USDollar.format(data["detailed_price"]["accomodation"])}</td>
    </tr>
    <tr>
        <td>Comida</td>
        <td>{USDollar.format(data["detailed_price"]["food"])}</td>
    </tr>
    <tr>
        <td>Actividades (parques incl.)</td>
        <td>{USDollar.format(data["detailed_price"]["activities"])}</td>
    </tr>
    <tr>
        <th colspan="2">Costo total estimado</th>
        <td>{USDollar.format(data["price"])}</td>
    </tr>
</table>

<style>

    table, td, th {
        border: 1px solid black;
        border-collapse: collapse;
        padding: .25rem 1rem;
    }
    th {
        text-align: left;
    }
    table {
        width: 100%;
    }

</style>