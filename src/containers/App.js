import React, { useState, useEffect } from 'react';
import PromtCardList from '../components/promtCardList';
import SearchBox from '../components/searchBox';
import SelectBox from '../components/selectBox';
import Loading from '../components/loading';
import Pagination from '../components/pagination';
import DataBox, {allData} from "../components/dataBox";


const imagePlaceholder = '../blank.png'

function App () {
  const [promts, setPromts] = useState([])
  const [searchField, setSearchfield] = useState('')
  const [selectedType, setSelectedType] = useState(null)
  const [onPagePromts, setOnPagePromts] = useState([])
  const [searchPromts, setSearchPromts] = useState([])
  const [paginationProps, setPaginationProps] = useState({
        promtsPerPage: 30,
        totalPromts: 0,
        currentPage: 1
  })


  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }

  const onSelectChange = (event) => {
    setSelectedType(event.target.value === '' ? null : event.target.value*1)
  }

  const fetchPromt = () => {
    fetch(allData[0]
    ,{
    headers : {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
    })
    .then(response => {
      return response.json();
    })
    .then(promts => {
      const arr = promts.messages.map((m)=>{
        const item = m[0];
        item.url = item.attachments && item.attachments.length ? item.attachments[0].url : imagePlaceholder
        return item;
      })      
    setPromts(arr)
      console.log(arr)
    })
      .catch(() => {
    })
  }

  useEffect(fetchPromt,[]);

  console.log(promts)

  useEffect(() => {
    const lastPromtIndex = paginationProps.currentPage * paginationProps.promtsPerPage
    const firstPromtIndex = lastPromtIndex - paginationProps.promtsPerPage

    const list = searchPromts.slice(firstPromtIndex, lastPromtIndex)
    setOnPagePromts(list)
    setPaginationProps((prevState) =>  {
      return { ...prevState, ...{totalPromts: searchPromts.length}}
    })
  },[promts, paginationProps.currentPage, searchPromts]);

  useEffect( () => {
    if (promts.length) {
      const filteredPromts = promts.filter(promt => {
        return selectedType !== null
            ? promt.type === selectedType && promt.content.toLowerCase().includes(searchField.toLowerCase())
            : promt.content.toLowerCase().includes(searchField.toLowerCase());
      })
      setPaginationProps( (prevState) =>  {
        return { ...prevState, ...{currentPage: 1}}
      })
      setSearchPromts(filteredPromts)
    }
  }, [promts, selectedType, searchField] )


  const paginate = (pageNumber) => {
    setPaginationProps( (prevState) =>  {
      return { ...prevState, ...{currentPage: pageNumber}}
    })
  }


  return !onPagePromts.length && searchField !== '' ?
    <Loading /> :
    (
    <div className='tc'>
      <DataBox />
      <SearchBox searchChange={onSearchChange} />
      <SelectBox selectChange={onSelectChange} />
      <PromtCardList promts={onPagePromts} />
      <Pagination
          paginate={paginate}
          {...paginationProps}/>
    </div>
  );
}

export default App;

