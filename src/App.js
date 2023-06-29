import { useState, useEffect  } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project';

function App() {

  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  
  function fetchData() {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setJobs(data)
      setLoading(false)
    })
  }

  useEffect(() => { 
    fetchData()
  }, [])

  if(loading === true) {
    return (<h1>Your content will be here soon...</h1>)
  }

  function changeValue(index) {
    setValue(index)
  }

  const {id, title, company, dates, duties, order} = jobs[value]
  return (
    <div className="App">
      <main>
          <h1>Exp<span>erie</span>nce</h1>
          <section className="duties-info-body">
              <aside>
                <ul>
                  {jobs.map((item, index) => {
                      return <li onClick={() => changeValue(index)}><h4 id="nav-company">{item.company}</h4></li>
                  })}
                </ul>
              </aside>

              <div className="duties-info">
                <h3 id="title">{title}</h3>
                <h4 id="company">{company}</h4>
                <h5 id="dates">{dates}</h5>
                
                  {duties.map((item) => {
                    return (
                        <section className="duties-list">
                          <FaAngleDoubleRight id="angle-icon"></FaAngleDoubleRight>
                          <p>{item}</p>
                        </section> 
                   )
                  })}
                
                <button><h3>More details</h3></button>
            </div>
          </section>  
      </main>
    </div>
  );

}

export default App;
