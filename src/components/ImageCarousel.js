import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Box, Button, Paper } from "@mui/material";

function ImageCarousel(props)
{
    var items = [
        {
            name: "Take Control of Your Health with Our BMI Calculator!",
            description: "Welcome to the BMI Calculator, the easiest way to determine your Body Mass Index (BMI) and take control of your health. Are you curious about your weight status and whether it's within a healthy range? Our online calculator will provide you with your BMI score in just seconds. BMI is a measure of body fat that is widely used by healthcare professionals to assess your risk for certain health conditions. By knowing your BMI, you can be more aware of your health risks and make informed decisions about your lifestyle habits. Don't wait any longer, use our BMI calculator now and take the first step towards a healthier you!",
            image: "https://media.istockphoto.com/id/1195206562/nl/foto/dieet-en-gezond-leven-verlies-gewicht-concept-groene-appel-en-weegschaal-maatregel-kraan-met.jpg?s=612x612&w=0&k=20&c=1R-kmf_IcE8b-y_tCGm-Oujt3xwfA0GUR5-bs9cyvc8="
        },
        {
            name: "About BMI Calculator",
            description: "A BMI calculator is an online tool that calculates your Body Mass Index (BMI) based on your height and weight. BMI is a measure of body fat that is used to assess whether an individual's weight is within a healthy range. The BMI calculation is based on a person's weight in kilograms divided by their height in meters squared. The resulting number provides an estimate of the amount of body fat a person has. The BMI ranges for underweight, normal weight, overweight, and obese have been established by the World Health Organization (WHO) and are widely used by healthcare professionals to assess health risks associated with weight. By using a BMI calculator, individuals can gain a better understanding of their weight status and make informed decisions about their health.",
            image: "https://media.istockphoto.com/id/172715906/nl/foto/diet-concept.jpg?s=612x612&w=0&k=20&c=eiLFx45QsqzPn9d3su6ILMxaHgaY-mIL0z6MdqzfDCU="
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <Box sx={{height: '400px', display: 'flex', alignItems: 'center', padding: '50px', textAlign: 'justify', textIndent: '20px'}}>
                <img src={props.item.image} alt='PageImage'/>
                <Box sx={{paddingLeft: '60px'}}>
                    <h2>{props.item.name}</h2>
                    <p>{props.item.description}</p>
                </Box>
            </Box>

            <Button sx={{ width: '100%', padding: '20px', backgroundColor: '#CCE5FF' }}>
                Check it out!
            </Button>
        </Paper>
    )
}

export default ImageCarousel;

