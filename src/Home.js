import Totals from "./components/Totals"
import Bar from "./components/BarChart"

const acquired = `https://raw.githubusercontent.com/ministero-salute/it-dgc-opendata/master/data/dgc-acquired.json`
const issued = `https://raw.githubusercontent.com/ministero-salute/it-dgc-opendata/master/data/dgc-issued.json`

export default function Home(){
  return(
    <div style={{margin:'10px auto'}}>
      <h1>Acquired by</h1>
      <Bar url={acquired}/>
      <Totals url={acquired}/>
      <h1>Issued for</h1>
      <Bar url={issued}/>
      <Totals url={issued}/>
    </div>
  )
}