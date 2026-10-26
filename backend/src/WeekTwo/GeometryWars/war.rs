// use axum::Json;
// use serde::Serialize;

// let mut count: i32 = 0;

// #[derive(Serialize)]
// pub struct StatsResponse {
//     count: i32,
// }

// pub async fn inc() -> Json<StatsResponse> {
//     unsafe {
//         count += 1;
//     }
//     Json(StatsResponse { count: count })
// }