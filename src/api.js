
class SurfboardAPI {

    static async getAgendaList() {

        const response = await fetch('data.json')
        const agendaList = await response.json();
        return agendaList;
    }

    //Was going to have put and post request here but using
    //data.json instead of a db

}

export default SurfboardAPI;