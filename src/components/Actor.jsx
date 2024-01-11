import {Card,CardBody,CardSubtitle,CardText,CardTitle,Button} from "reactstrap"
import Example from "./Example"
export const Actor = ({name,profile_path,popularity,known_for,original_name})=>{
    const baseUrl = "https://image.tmdb.org/t/p/w500"
    const id= name.split(" ").join("")
    return (
        <div  id={id}>
          <Card
        style={{
          width: '18rem'
        }}
       
      >
        <img
          alt="Sample"
          src={`${baseUrl}${profile_path}`}
        />
        <CardBody>
          <CardTitle tag="h5">
            {name}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            Rating:{popularity}
          </CardSubtitle>
          <CardText>
            Movies starred in:
            {
            known_for.map((movie)=>(
              <p>
                {movie.original_title||movie.original_name} realesed in : {movie.release_date||movie.first_air_date}
                </p>
            ))
            }
          
          </CardText>
          <Button>
            Button
          </Button>
        </CardBody>
      </Card>
      <Example name={id} original={original_name}/>
        </div>
    )
}