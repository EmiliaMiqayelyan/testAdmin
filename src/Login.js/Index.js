import { Button, Card, Form } from "react-bootstrap"
import hook from "./hook";
import "./style.css";
export default () => {
    const {register, handleSubmit,submit} = hook()
    return <div className ="login"> <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Log in</Card.Title>
            <Form onSubmit={handleSubmit(submit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control  placeholder="Enter User name"
                    {...register("username",{
                        required:true
                    })}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                    {...register("password",{
                        required:true
                    })}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </Card.Body>
    </Card>
    </div>
}