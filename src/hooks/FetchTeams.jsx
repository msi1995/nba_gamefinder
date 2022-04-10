import { useEffect, useState } from "react";

export default function FetchTeams() {

    const [teamData, setTeamData] = useState([])

    async function fetchTeamData(){
        let responseBody = {}
        try {
            const response = await fetch(
                `https://www.balldontlie.io/api/v1/teams`,
            );
            responseBody = await response.json();
        } catch (e) {
            if (e instanceof DOMException) {
                console.log("== HTTP request cancelled")
            } else {
                throw e;
            }
        }

        if(responseBody.data){
            setTeamData(responseBody.data || [])
        }
        else{
            
        }
    }

    useEffect(() => {
        fetchTeamData()
    }, []);

    return teamData
}