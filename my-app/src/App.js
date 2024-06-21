import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import React from "react";
import Home from "./routing/home";
import About from "./routing/about";
import ContactUs from "./routing/contactUs";
import NoPageFound from "./routing/noPageFound";
import "./App.css"
import College from "./nested/college";
import Teacher from "./nested/teacher";
import Student from "./nested/student";
import Dashboard from "./dashboard";
import Login from "./login";
import Book from "./book";
import Hooks from "./hooks";
import Component1 from "./useContextDemo";
import UseMemoDemo from "./useMemoDemo";
import UserEffectDemo from "./userEffectDemo";
import TypesOfComponents from "./typesOfComponents";
import Room1 from "./Room1";
import Room2 from "./Room2";
import LifeCycleDemo from "./lifeCycleDemo";
import ConditionalDemo from "./conditionalDemo";
import NestedMapDemo from "./nestedMapDemo";
import FormDemo from "./formdemo";
import ReactHookFrom from "./routing/hookFormDemo";
import UnControlled from "./routing/unControlled";
import TableWithEditDelete from "./tableWithEditDelete";
import Counter from "./counter";
import Spa from "./spa";
export default function App() {
  return(
      <BrowserRouter>

          <Routes>
              <Route path="/login" element={<Login/>}/>
              <Route path="/" element={<Navigate replace to="/login"/>}/>
              <Route path="/dashboard" element={<Dashboard/>}>
                  <Route path="home" element={<Home/>}/>
                  <Route path="about" element={<About/>}/>
                  <Route path="contactUs" element={<ContactUs age = {20} />}/>
                  <Route path="*" element={<NoPageFound/>}/>
                  <Route path="college" element={<College/>}>
                      <Route path="teacher" element={<Teacher/>}/>
                      <Route path="student" element={<Student/>}/>
                  </Route>
                  <Route path="book" element={<Book/>}>
                      <Route path="hooks" element={<Hooks/>}>
                          <Route path="UseContentDemo" element={<Component1/>}/>
                          <Route path="UseMemoDemo" element={<UseMemoDemo/>}/>
                          <Route path="UseEffectDemo" element={<UserEffectDemo/>}/>
                      </Route>
                      <Route path="typesofcomponnets" element={<TypesOfComponents/>}>
                          <Route path="classcomponnet" element={<Room1/>}/>
                          <Route path="functioncomponent" element={<Room2/>}/>
                      </Route>
                      <Route path="lifecycle" element={<LifeCycleDemo/>}/>
                      <Route path="conditionaldemo" element={<ConditionalDemo/>}/>
                      <Route path="nestedmapdemo" element={<NestedMapDemo/>}/>
                  </Route>
                  <Route path="formDemo" element={<FormDemo/>}/>
                  <Route path="hookForm" element={<ReactHookFrom/>}/>
                  <Route path= "UnControlled" element={<UnControlled/>}/>
                  <Route path="counter" element={<Counter/>}/>
                  <Route path="tabelWithEditDelete"element={<TableWithEditDelete/>}/>
                  <Route path="spa" element={<Spa/>}/>
                 
              </Route>
          </Routes>
      </BrowserRouter>
);
}