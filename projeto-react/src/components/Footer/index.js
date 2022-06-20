import { Container, Grid, Box, Link } from "@mui/material"

export default function Footer() {
    return (
        <footer>
            <Box
                px={{ xs: 3, sm: 10 }}
                bgcolor="text.secondary"
                py={{ xs: 5, sm: 10 }}
                color="white"
            >
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={6}>
                            <Box borderBottom={1}>Listas</Box>
                            <Box>
                                <Link href="/produto" color="inherit">
                                    Lista de Produtos
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/produto" color="inherit">
                                    Lista de Categorias
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box borderBottom={1}>Redes</Box>
                            <Box>
                                <Link href="https://www.facebook.com" color="inherit">
                                    Facebook
                                </Link>
                            </Box>
                            <Box>
                                <Link href="https://www.instagram.com" color="inherit">
                                    Instagram
                                </Link>
                            </Box>
                        </Grid>


                    </Grid>
                    <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
                        E-Commerce nome aqui &reg;{new Date().getFullYear}
                    </Box>
                </Container>
            </Box>
        </footer>
    )
}
