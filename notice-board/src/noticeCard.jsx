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
        return `${date[2]} ${months[date[1] - 1]} ${date[0]}`;
    };

    return (
        <div>
            <div style={{width:"30%",margin:"auto" , border:"1px solid black"}}>
                <h3 style={{textAlign:"left" , marginLeft:"10px"}}>{notice.notice}</h3>
                <p style={{textAlign:"right" , marginRight:"10px"}}>{getDate(notice.createdAt)}</p>
            </div>
        </div>
    )
}
