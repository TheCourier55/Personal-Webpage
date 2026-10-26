use axum::{
    body::Body,
    http::{header, Response, StatusCode},
    response::IntoResponse,
    routing::get,
    Router,
};
use rust_embed::RustEmbed;
use std::net::SocketAddr;

// 1. Tell Rust where your frontend build folder is located relative to this file.
// (Make sure you run `npm run build` in your frontend folder so a 'dist' folder exists!)
#[derive(RustEmbed)]
#[folder = "../frontend/dist"] 
struct Asset;

#[tokio::main]
async fn main() {
    // Build our application router with routes
    let app = Router::new();
        // API routes can go here
        // Catch-all route to serve the React Single Page Application (SPA)

    // Bind to 0.0.0.0:8080 (or port 80/3000 depending on your setup)
    let addr = SocketAddr::from(([0, 0, 0, 0], 8080));
    println!("Server started successfully at http://{}", addr);

    let listener = tokio::net::TcpListener::bind(&addr).await.unwrap();
    axum::serve(listener, app).await.unwrap();
}
