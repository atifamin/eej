import React from 'react'
import { Sidebar } from "../Sidebar";
import { Header } from "../Header";
import { CreateContent } from "./CreateContent";

export const Create = (prop) => {
  return (
    <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
      <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
        
        <Header/>        
        <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
            <Sidebar logo={prop.logo} title={prop.title}/>
          <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
            <div className="d-flex flex-column flex-column-fluid">
              <CreateContent/>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
