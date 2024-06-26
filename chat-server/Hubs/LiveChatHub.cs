﻿using chat_api.Interfaces;
using Microsoft.AspNetCore.SignalR;
using System;

namespace chat_api.Hubs
{
    public class LiveChatHub : Hub<ILiveChatHub>, ILiveChatHub
    {

        private const string LIVE_CHAT_GROUP = "LiveChatGroup";

        public override async Task OnConnectedAsync()
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, LIVE_CHAT_GROUP);
        }

        public override async Task OnDisconnectedAsync(Exception exception)
        {
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, LIVE_CHAT_GROUP);
        }

        public async Task OnEnterChatAsync(string userName)
        {
            await Clients.Groups(LIVE_CHAT_GROUP).OnEnterChatAsync(userName);
        }

        public async Task OnExitChatAsync(string userName)
        {
            await Clients.OthersInGroup(LIVE_CHAT_GROUP).OnExitChatAsync(userName);
        }

        public async Task OnNewMessageAsync(string userName, string message)
        {
            await Clients.OthersInGroup(LIVE_CHAT_GROUP).OnNewMessageAsync(userName, message);
        }
    }

}
