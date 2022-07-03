
class SurfboardAPI {

    static async getAgendaList() {

        const response = await fetch('data.json')
        const agendaList = await response.json();
        return agendaList;
    }

    static async addAgendaItem(item) {
        const response = await fetch('data.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        return response.json;
    }

    static async removeAgendaItem(id) {

    }

    static async updateAgendaItem(id) {

    }

}

export default SurfboardAPI;