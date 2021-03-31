<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookDetailsController;
use App\Http\Controllers\PurchasedHistoriesController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('bookdetails', [BookDetailsController::class, 'index']);
Route::post('bookdetail', [BookDetailsController::class, 'store']);
Route::put('bookdetail/{id}', [BookDetailsController::class, 'update']);
Route::delete('bookdetail/{id}', [BookDetailsController::class, 'destroy']);

Route::get('purchasedhistories', [PurchasedHistoriesController::class, 'index']);
Route::post('purchasedhistory', [PurchasedHistoriesController::class, 'store']);
Route::put('purchasedhistory/{id}', [PurchasedHistoriesController::class, 'update']);
Route::delete('purchasedhistory/{id}', [PurchasedHistoriesController::class, 'destroy']);