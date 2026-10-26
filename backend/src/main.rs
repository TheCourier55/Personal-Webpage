use axum::{
    routing::get,
    Router,
};
#[tokio::main]
async fn main() {
    let app = Router::new().route("/api/hello", get(hello_handler));
    let listener = tokio::net::TcpListener::bind("127.0.0.1:3000")
        .await
        .unwrap();
    println!("Axum server running on http://127.0.0.1:3000");
    axum::serve(listener, app).await.unwrap();
}
async fn hello_handler() -> &'static str {
    "Hello from the Rust Axum backend!"
}