import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "../css/BaniereHome.css";

export default function Baniere() {
const location = useLocation();
const [bannerClass, setBannerClass] = useState('baniere');

useEffect(() => {
if (location.pathname === '/about') {
setBannerClass('baniere__about');
} else {
setBannerClass('baniere__home');
}
}, [location]);

return (
<div className={bannerClass}>
<h1 className="baniere__title">
<span className="baniere__title__lineBreak">Chez vous, </span><span className="baniere__title__lineBreak baniere__title__lineBreak--down">partout et ailleurs</span>
</h1>
</div>
);
}
