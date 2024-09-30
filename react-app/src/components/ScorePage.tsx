import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";


const PageContainer = styled.div`
  background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8ae1c281-ed89-448d-871b-a2e351a6ba6f/d3l1qoj-f1b1c676-9602-4c65-bd7d-ea518fbc8b88.png/v1/fit/w_828,h_468,q_70,strp/minecraft_dirt_wallpaper_by_thedevartist_d3l1qoj-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvOGFlMWMyODEtZWQ4OS00NDhkLTg3MWItYTJlMzUxYTZiYTZmXC9kM2wxcW9qLWYxYjFjNjc2LTk2MDItNGM2NS1iZDdkLWVhNTE4ZmJjOGI4OC5wbmciLCJ3aWR0aCI6Ijw9MTM2MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.eIuCDVce_BUnxTihuRe4T5GFG2ePh3NoJIxlHHLvxwI");
  background-size: contain; /* Ensures the image fits the width of the screen */
  background-repeat: repeat-y; /* Ensures the background repeats vertically */
  background-position: top center; /* Keeps the image centered */
  min-height: 100vh; /* Ensures the container covers the viewport height */
  padding-top: 70px; /* Adds space for the navbar */
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Aligns content below the navbar */
  align-items: center;
`;

const StyledTable = styled.table`
  width: 80%;
  margin: 20px;
  border-collapse: collapse;
  background-color: rgba(0, 0, 0, 0.7); /* Transparent black background */
  color: white;
`;

const TableHead = styled.th`
  padding: 10px;
  border: 1px solid #ccc;
  text-align: center;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: rgba(
      255,
      255,
      255,
      0.1
    ); /* Slight contrast for even rows */
  }
`;

const TableData = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
  text-align: center;
`;

const ScorePage: React.FC = () => {
  const [players, setPlayers] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:9000/minecraft/player/")
      .then((response) => {
        const sortedPlayers = response.data.sort(
          (a: any, b: any) => b.kills - a.kills
        );
        setPlayers(sortedPlayers);
      })
      .catch((error) => {
        console.error("Error fetching player data:", error);
      });
  }, []);

  return (
    <PageContainer>
      <h1>Player Scores</h1>
      <StyledTable>
        <thead>
          <TableRow>
            <TableHead>Display Name</TableHead>
            <TableHead>Kills</TableHead>
            <TableHead>Deaths</TableHead>
          </TableRow>
        </thead>
        <tbody>
          {players.map((player) => (
            <TableRow key={player.id}>
              <TableData>{player.display_name}</TableData>
              <TableData>{player.kills}</TableData>
              <TableData>{player.deaths}</TableData>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </PageContainer>
  );
};

export default ScorePage;
