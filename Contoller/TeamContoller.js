import asyncHandler from 'express-async-handler';
import Team from '../Model/TeamModel.js'

/**
 * description : get requiest 
 * routes : Team
 * mothode: get
 * access: public
 */
export const allTeam = asyncHandler(
    async (req, res) =>{
        res.status(200).json({name: 'montaj'})

    }
);
/**
 * description : post requiest 
 * routes : Team
 * mothode: post
 * access: public
 */
export const createTeam = asyncHandler(
    async (req, res) =>{

        const {name} = req.body;

        const TeamList = await Team.create({
            name
        })
        res.status(200).json({massege: `Team created`, TeamList}),{
            
        }

    }
);

