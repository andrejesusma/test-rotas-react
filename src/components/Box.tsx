interface ContentBox{
    text: string;
}

export function Box(props: ContentBox){
    return (
        <div
            style={{ 
                background: 'black',
                color: '#e1e1f6',
                width: '30px',
                height: '30px',
                display: 'flex',
                padding: '10px',
                alignItems: 'center',
            }}
        >
            <p>{props.text}</p>
        </div>
    );
}