use crate::*;

pub fn initialize_game(
    client: &Client,
    user: Pubkey,
    game: Pubkey,
    wager: Option<u64>,
    timer: u32,
    increment: u32,
    is_rated: bool,
) -> ClientResult<()> {
    let initiallize_game_ix = Instruction {
        program_id: sol_chess::ID,
        accounts: vec![
            AccountMeta::new(client.payer_pubkey(), true),
            AccountMeta::new(user, false),
            AccountMeta::new(game, false),
            AccountMeta::new_readonly(system_program::ID, false),
            AccountMeta::new_readonly(clock::ID, false),
        ],
        data: sol_chess::instruction::InitializeGame {
            game_config: sol_chess::GameConfig {
                wager,
                timer,
                increment,
                is_rated,
            },
        }
        .data(),
    };

    send_and_confirm_tx(
        &client,
        [initiallize_game_ix].to_vec(),
        None,
        "initialize_game".to_string(),
    )?;

    Ok(())
}
