import React from 'react'

export default function NoticeCard({ notice }) {
    const getDate = (createdAt) => {
        var months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
        let date = createdAt.split('T')[0].split('-').map(Number);
        return `${date[2]} ${months[date[1] - 1]} ${date[0]} `;
    };

    // 2022-08-22T10:05:16.114Z

    return (
        <div>
            <div style={{ width: "30%", margin: "auto", border: "1px solid black" }}>
                <h3 style={{ textAlign: "left", marginLeft: "10px" }}>{notice.notice}</h3>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p style={{marginLeft:"10px"}}>{notice.user}</p>
                    <p style={{  marginRight: "10px" }}>{getDate(notice.createdAt)}</p>
                </div>
            </div>
        </div>
    )
}
