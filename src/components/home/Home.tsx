import React from 'react';
import styled from 'styled-components';
import Container from "@material-ui/core/Container";
import {Button} from "@material-ui/core";
import {AccessTime} from "@material-ui/icons";
import Notes from '../notes/Notes'

const Wrapper = styled.div``

type PropType = {};

export const Home: React.FC<PropType> = () => {
    return (
        <Wrapper>
            <Container component="main" maxWidth="lg">
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<AccessTime/>}
                >
                    Timer
                </Button>
                <Notes/>
            </Container>
        </Wrapper>
    );
};