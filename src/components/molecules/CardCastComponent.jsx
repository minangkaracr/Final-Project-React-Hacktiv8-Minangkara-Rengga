import {Card} from 'react-bootstrap'

export default function CardCastComponent({name, character, link}) {
    return (
        <>
            <Card style={{ width: '8rem',  margin:'0.25rem', padding:'0', border:'none'}}>
                <Card.Img alt='' variant="top" src={link} style={{ objectFit: 'cover', height:"10rem" }}/>
                <Card.Body>
                    <div className='flex-wrap' style={{ maxWidth: '6rem' }}><strong>{name}</strong></div>
                    <Card.Text className='d-flex justify-content-between'>as {character}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}