"use strict";

class SurfboardAPI {

    static async getAgendaList() {

        const response = await fetch('data.json')
        const agendaList = await response.json();
        return agendaList;
    }

    static async addAgendaItem() {

    }

    static async removeAgendaItem() {

    }

    static async updateAgendaItem() {

    }

}

export default SurfboardAPI;