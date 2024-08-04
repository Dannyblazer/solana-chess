use anchor_lang::prelude::*;
use anchor_lang::solana_program::instruction::Instruction;
use std::mem::size_of;

declare_id!("9PsU5ntn26Bos8FRtwupQbvoYbchzt8bdQoxLym7AHWB");

pub mod contexts;
pub mod error;
pub mod models;
pub mod states;

pub use contexts::*;
pub use error::*;
pub use models::*;
pub use states::*;

#[program]
pub mod sol_chess {
    use super::*;

    pub fn initialize_user(ctx: Context<InitializeUser>) -> Result<()> {
        ctx.accounts.process()
    }

    pub fn initialize_game(ctx: Context<InitializeGame>, game_config: GameConfig) -> Result<()> {
        let game_bump = *ctx.bumps.get("game").unwrap();
        ctx.accounts.process(game_config, game_bump)
    }

    pub fn join_game(ctx: Context<JoinGame>, color: Color) -> Result<()> {
        ctx.accounts.process(color)
    }

    pub fn move_piece(ctx: Context<MovePiece>, from: Square, to: Square) -> Result<()> {
        ctx.accounts.process(from, to)
    }

    pub fn deposit(ctx: Context<Deposit>, amount: u64) -> Result<()> {
        ctx.accounts.process(amount)
    }

    pub fn withdraw(ctx: Context<Withdraw>, amount: u64) -> Result<()> {
        let vault_bump = *ctx.bumps.get("vault").unwrap();
        ctx.accounts.process(vault_bump, amount)
    }

    pub fn leave_game(ctx: Context<LeaveGame>) -> Result<()> {
        ctx.accounts.process()
    }

    pub fn resign(ctx: Context<Resign>) -> Result<()> {
        ctx.accounts.process()
    }

    pub fn offer_draw(ctx: Context<OfferDraw>) -> Result<()> {
        ctx.accounts.process()
    }
}
