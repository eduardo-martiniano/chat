FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["chat-server/chat-api.csproj", "."]
RUN dotnet restore "./chat-api.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "chat-api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "chat-api.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "chat-api.dll"]