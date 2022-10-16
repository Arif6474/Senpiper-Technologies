import React, { useEffect, useState } from 'react';
import useFeedback from '../Hooks/useFeedback';
import axios from "axios";
import DataTable, { createTheme } from "react-data-table-component";
import './AllFeedback.css'
const AllFeedback = () => {
    const [feedbacks, setFeedbacks] =useFeedback([]);
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState([]);
   
    const getFeedbackData = async () => {
      try {
        const results = await axios.get("http://localhost:5000/feedback");
        setFeedbacks(results.data);
        setFilteredData(results.data);
      } catch (error) {
        console.log(error);
      }
    };
    const columns = [
      
        {
          name: <h1 className="table-header">Customer Name</h1>,
          selector: (row) => row.name,
          sortable: true,
        },
        {
          name: <h1 className="table-header">Email</h1>,
          selector: (row) => row.email,
          sortable: true,
        },
        {
          name: <h1 className="table-header">Phone</h1>,
          selector: (row) => row.phone,
        },
        {
          name: <h1 className="table-header">Please rate the quality of the service you received from your host.</h1>,
          selector: (row) => row.service[0],
        },
        {
          name: <h1 className="table-header">Please</h1>,
 
         
        }
      ];
      createTheme(
        "solarized",
        {
          text: {
            primary: "#181818",
            secondary: "#2aa198",
          },
          background: {
            default: "#EEEEEE",
          },
          context: {
            background: "#cb4b16",
            text: "#FFFFFF",
          },
          divider: {
            default: "#C4DDFF",
          },
          action: {
            button: "rgba(0,0,0,.54)",
            hover: "rgba(0,0,0,.08)",
            disabled: "rgba(0,0,0,.12)",
          },
        },
        "dark"
      );
      useEffect(() => {
        getFeedbackData();
      }, []);
      useEffect(() => {
        const result = feedbacks.filter((d) => {
          return (
            d.name.toLowerCase().match(search.toLowerCase()) ||
            d.email.match(search) ||
            d.phone.match(search)  
          );
        });
      
        setFilteredData(result);
      }, [search, feedbacks]);
    return (
        <div>
        <DataTable
          columns={columns}
          data={filteredData}
          pagination
          theme="solarized"
          title={<h1 className="text-black">Aromatic bar</h1>}
          fixedHeader
          selectableRows
          selectableRowsHighlight
          highlightOnHover
          subHeader
          subHeaderComponent={
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input input-bordered input-teal-500 bg-slate-200 text-black w-40"
              placeholder="Search to filter"
            />
          }
          subHeaderAlign="right"
        />
      </div>
    );
};

export default AllFeedback;