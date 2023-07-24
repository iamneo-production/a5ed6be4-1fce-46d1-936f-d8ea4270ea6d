import React from "react";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './shop.css';


function Shop() {
  return (
    <div className="whole">
      <div className='box'>

        <div className="p1">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://www.crsi.org/wp-content/uploads/black-bar-stacked.jpg"
                alt="STEEL"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  TMT-Steel
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product ID: M-001
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product Name: Steel
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quantity in Warehouse: 1500 KG
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/order'>
                <Button size="small" color="primary">
                  Buy now
                </Button>
              </Link>
            </CardActions>
          </Card>
          <br></br>
        </div>


        <div className="p2">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://tse4.mm.bing.net/th?id=OIP.wHoftj1Y1ef7husWEecKjgHaE8&pid=Api&P=0&h=180"
                alt="STEEL"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Roller Bearing
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product ID: M-172
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product Name: Steel
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quantity in Warehouse: 1800 KG
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/order'>
                <Button size="small" color="primary">
                  Buy now
                </Button>
              </Link>
            </CardActions>
          </Card>
          <br></br>
        </div>

        <div className="p3">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://tse1.mm.bing.net/th?id=OIP.k9mebzXtWikNfLKNJl0uMAHaE7&pid=Api&P=0&h=180"
                alt="STEEL"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Carbon Steel
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product ID: M-058
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product Name: Carbon Steel
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quantity in Warehouse: 100 KG
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/order'>
                <Button size="small" color="primary">
                  Buy now
                </Button>
              </Link>
            </CardActions>
          </Card>
          <br></br>
        </div>

        <div className="p4">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://tse3.mm.bing.net/th?id=OIP.A_Y2yNepD1a5p1RqBcp-OAHaE6&pid=Api&P=0&w=300&h=300"
                alt="STEEL"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  PVC pipes
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product ID: P-515
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product Name: PVC pipes
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quantity in Warehouse: 100 KG
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/order'>
                <Button size="small" color="primary">
                  Buy now
                </Button>
              </Link>
            </CardActions>
          </Card>
          <br></br>
        </div>
        <div className="p4">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://tse1.mm.bing.net/th?id=OIP.k9mebzXtWikNfLKNJl0uMAHaE7&pid=Api&P=0&h=180"
                alt="STEEL"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Carbon Steel
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product ID: M-058
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product Name: Carbon Steel
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quantity in Warehouse: 100 KG
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/order'>
                <Button size="small" color="primary">
                  Buy now
                </Button>
              </Link>
            </CardActions>
          </Card>
          <br></br>
        </div>
        <div className="p4">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://tse2.mm.bing.net/th?id=OIP.wrp-Z7XCd4bxU9sni65SPAHaEv&pid=Api&P=0&h=180"
                alt="STEEL"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Copper wire
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product ID: CP-278
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product Name: Copper wire
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quantity in Warehouse: 120 KG
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/order'>
                <Button size="small" color="primary">
                  Buy now
                </Button>
              </Link>
            </CardActions>
          </Card>
          <br></br>
        </div>
        <div className="p4">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://tse4.mm.bing.net/th?id=OIP._6y6K-mcxcBydWK45oSSXwHaDw&pid=Api&P=0&h=180"
                alt="STEEL"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Copper rod
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product ID: CP-144
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product Name: Copper rod
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quantity in Warehouse: 15 KG
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/order'>
                <Button size="small" color="primary">
                  Buy now
                </Button>
              </Link>
            </CardActions>
          </Card>
          <br></br>
        </div>
        <div className="p4">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://tse2.mm.bing.net/th?id=OIP.8A2vL8-sundy1T3cjDfN9QHaHf&pid=Api&P=0&h=180"
                alt="STEEL"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Magnetic bearing
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product ID: MB-69
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product Name: Magnetic bearing
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quantity in Warehouse: 6 KG
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/order'>
                <Button size="small" color="primary">
                  Buy now
                </Button>
              </Link>
            </CardActions>
          </Card>
          <br></br>
        </div>
        <div className="p4">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://tse1.mm.bing.net/th?id=OIP.8IbKbdj2irgw5FGjndGwFAAAAA&pid=Api&P=0&h=180"
                alt="STEEL"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Fluid bearing
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product ID: B-54
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product Name: Fluid bearing
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quantity in Warehouse: 16 KG
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/order'>
                <Button size="small" color="primary">
                  Buy now
                </Button>
              </Link>
            </CardActions>
          </Card>
          <br></br>
        </div>

        <div className="p4">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://www.investmentcastchina.com/wp-content/uploads/2020/05/Precision-Casting-for-Complex-Stainless-Steel-Parts.jpg"
                alt="STEEL"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Casting Steel
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product ID: Ch-005
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product Name: Casting steel
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quantity in Warehouse: 180 KG
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/order'>
                <Button size="small" color="primary">
                  Buy now
                </Button>
              </Link>
            </CardActions>
          </Card>
          <br></br>
        </div>

        <div className="p4">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://tse3.mm.bing.net/th?id=OIP.UiSJ599M_cbX_bbY-3NvQwHaFh&pid=Api&P=0&h=180"
                alt="STEEL"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Aluminium roller
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product ID: Al-852
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product Name: Aluminium roller
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quantity in Warehouse: 40 KG
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/order'>
                <Button size="small" color="primary">
                  Buy now
                </Button>
              </Link>
            </CardActions>
          </Card>
          <br></br>
        </div>

        <div className="p4">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://tse3.mm.bing.net/th?id=OIP.-rwKN6VLmlKtoLnaczuOtAHaE7&pid=Api&P=0&h=180"
                alt="STEEL"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Iron Bar
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product ID: TD-545
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product Name: Iron bar
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quantity in Warehouse: 29 KG
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/order'>
                <Button size="small" color="primary">
                  Buy now
                </Button>
              </Link>
            </CardActions>
          </Card>
          <br></br>
        </div>

        <div className="p4">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://tse3.mm.bing.net/th?id=OIP.LFYCl6f1d7U6-ENDxiEtIAHaDv&pid=Api&P=0&h=180"
                alt="STEEL"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                   Steel Wire
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product ID: D-285
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product Name:Steel Wire
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quantity in Warehouse:55KG
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/order'>
                <Button size="small" color="primary">
                  Buy now
                </Button>
              </Link>
            </CardActions>
          </Card>
          <br></br>
        </div>

        <div className="p4">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://tse4.mm.bing.net/th?id=OIP.c8AIs5JW-68qUmpQc_ZOEwHaEo&pid=Api&P=0&h=180"
                alt="STEEL"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Yier Corp
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product ID: M-789
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product Name: Steel
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quantity in Warehouse: 1892 KG
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/order'>
                <Button size="small" color="primary">
                  Buy now
                </Button>
              </Link>
            </CardActions>
          </Card>
          <br></br>
        </div>
        
      </div>
    </div>
  );
}
export default Shop;
