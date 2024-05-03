
import React, { useEffect, useState } from 'react';

import Chart from 'chart.js/auto'; 
import './dashboardContainer.css'; 

const DasboardContainer = () => {
    const [numbers, setNumbers] = useState({
        singlePage: 0,
        focusPage: 0,
        blogs: 0,
        totalViews: 0
    });

    useEffect(() => {
        const targetNumbers = {
            singlePage: 12,
            focusPage: 30,
            blogs: 10,
            totalViews: 50
        };

        const interval = setInterval(() => {
            setNumbers(prevNumbers => ({
                singlePage: prevNumbers.singlePage < targetNumbers.singlePage ? prevNumbers.singlePage + 1 : targetNumbers.singlePage,
                focusPage: prevNumbers.focusPage < targetNumbers.focusPage ? prevNumbers.focusPage + 1 : targetNumbers.focusPage,
                blogs: prevNumbers.blogs < targetNumbers.blogs ? prevNumbers.blogs + 1 : targetNumbers.blogs,
                totalViews: prevNumbers.totalViews < targetNumbers.totalViews ? prevNumbers.totalViews + 1 : targetNumbers.totalViews
            }));
        }, 100); 

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        
        const ctxLine = document.getElementById('lineChart').getContext('2d');
    const lineChart = new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Total Views',
                data: [2050, 1900, 2100, 2800, 1800, 2000, 2500, 2600, 2450, 1950, 2300, 2900], // Update this data
                backgroundColor: 'rgba(85, 85, 85, 1)',
                borderColor: 'rgb(41, 155, 99)',
                borderWidth: 1
            }]
            },
            options: {
                responsive: true
            }
        });

       
        const ctxDoughnut = document.getElementById('doughnut').getContext('2d');
        const doughnutChart = new Chart(ctxDoughnut, {
            type: 'doughnut',
            data: {
                labels: ['Visitors', 'New Visitors'],
                datasets: [{
                    label: 'Message',
                    data: [75, 25],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 99, 132, 0.5)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true
            }
        });

        return () => {
            lineChart.destroy();
            doughnutChart.destroy();
        };
    }, []);

    return (
        <main className="main-content">
            <div className="main">
                <div className="cards">
                    <div className="card">
                        <div className="card-content">
                            <div className="number">{numbers.singlePage}</div>
                            <div className="card-name">Single page</div>
                        </div>
                        <div className="icon-box">
                            <i className="fas fa-user-graduate"></i>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <div className="number">{numbers.focusPage}</div>
                            <div className="card-name">Focus page</div>
                        </div>
                        <div className="icon-box">
                            <i className="fas fa-chalkboard-teacher"></i>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <div className="number">{numbers.blogs}</div>
                            <div className="card-name">Blogs</div>
                        </div>
                        <div className="icon-box">
                            <i className="fas fa-users"></i>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <div className="number">{numbers.totalViews}</div>
                            <div className="card-name">Total views</div>
                        </div>
                        <div className="icon-box">
                            <i className="fas fa-dollar-sign"></i>
                        </div>
                    </div>
                </div>
                <div className="charts">
                    <div className="chart">
                        <h2>Visitors (past 12 months)</h2>
                        <div>
                            <canvas id="lineChart"></canvas>
                        </div>
                    </div>
                    <div className="chart doughnut-chart">
                        <h2>Message</h2>
                        <div>
                            <canvas id="doughnut"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DasboardContainer;
