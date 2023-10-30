const API_URL='http://localhost:8000'

async function httpGetPlanets() {
  const response = await fetch(`${API_URL}/planets`);
  return await response.json();
}

async function httpGetLaunches() {
  const response = await fetch(`${API_URL}/launches`);
  const fetched = await response.json();
  return fetched.sort((a,b)=>{
    return a.fightNumber-b.flightNumber;
  });
}

async function httpSubmitLaunch(launch) {
  
  await fetch(`${API_URL}/launches`,
  {
    method:"post",
    headers:
    {
      "Content-Type": "application/json",

    },
    body:JSON.stringify(launch),

  })
}

async function httpAbortLaunch(id) {
  return await fetch(`${API_URL}/launches/${id}`,
  {
    method:"delete",
    
  });
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};