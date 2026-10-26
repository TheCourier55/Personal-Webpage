// use axum::{
//     routing::get,
//     Json, Router,};
// use serde::Serialize;
// use tower_http::cors::CorsLayer;

// mod WeekTwo;
// pub mod GeometryWars;
// pub mod War;

// #[tokio::main]
// async fn main() {
//     let app = Router::new()
//         .route("/api/increment", get(inc))
//         .nest_service("/", ServeDir::new("dist")); 
//     let listener = tokio::net::TcpListener::bind("127.0.0.1:3000").await.unwrap();
//     axum::serve(listener, app).await.unwrap();
// }

// async fn inc() -> Json<i32> {
//     return get(WeekTwo::GeometryWars::war::inc);
// }