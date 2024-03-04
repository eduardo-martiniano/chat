namespace chat_api.Interfaces
{
    public interface ILiveChatHub
    {
        Task OnExitChatAsync(string userName);
        Task OnEnterChatAsync(string userName);
        Task OnNewMessageAsync(string userName, string message);
    }
}
